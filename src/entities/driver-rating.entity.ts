import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Driver } from './drivers.entity';
import { Rides } from './rides.entity';
import { User } from './user.entity';

@Entity()
export class DriverRating {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Rides)
  @JoinColumn()
  rides: Rides;

  @OneToOne(() => Driver)
  @JoinColumn()
  driver: Driver;

  @OneToOne(() => User)
  @JoinColumn()
  passanger: User;

  @Column({
    type: Number,
  })
  rating: number;

  @Column({
    type: String,
  })
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}
