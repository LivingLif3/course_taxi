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
import { Location } from './location.entity';

@Entity()
export class RideRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  passanger: User;

  @OneToOne(() => Location)
  @JoinColumn()
  pickup_location: Location;

  @OneToOne(() => Location)
  @JoinColumn()
  dropoff_location: Location;

  @Column({
    type: Date,
  })
  requested_time: Date;

  @Column({
    type: String,
  })
  status: string;
}
