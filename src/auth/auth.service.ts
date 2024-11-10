import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(registerDto: any): Promise<any> {
    const { email, password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      ...registerDto,
      password_hash: hashedPassword,
    });
    await this.userRepository.save(newUser);
    return { message: 'User registered successfully' };
  }

  async login(loginDto: any): Promise<any> {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password_hash))) {
      const payload = { email: user.email, sub: user.id };
      return { access_token: this.jwtService.sign(payload) };
    }
    throw new Error('Invalid credentials');
  }
}
