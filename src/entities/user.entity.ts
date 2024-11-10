import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { Driver } from './drivers.entity';
import { Rides } from './rides.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  first_name: string;

  @Column({
    type: String,
  })
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: String,
  })
  phone: string;

  @Column({
    type: String,
  })
  password_hash: string;

  @Column({
    type: String,
  })
  role: string;

  @CreateDateColumn()
  created_at: string;

  @OneToOne(() => Driver, (driver) => driver.user)
  driver: Driver;

  @OneToOne(() => Rides, (rides) => rides.passanger)
  rides: Rides;
}
