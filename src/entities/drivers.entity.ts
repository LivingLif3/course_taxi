import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Car } from './car.entity';
import { Rides } from './rides.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.driver)
  @JoinColumn()
  user: User;

  @OneToOne(() => Car, (car) => car.driver)
  @JoinColumn()
  car: Car;

  @OneToOne(() => Rides, (rides) => rides.driver)
  rides: Rides;

  @Column({
    type: String,
  })
  license_number: string;

  @Column({
    type: Number,
  })
  rating: number;
}
