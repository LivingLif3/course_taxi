import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Driver } from './drivers.entity';
import { User } from './user.entity';
import { Location } from './location.entity';

@Entity()
export class Rides {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Driver, (driver) => driver.rides)
  @JoinColumn()
  driver: Driver;

  @OneToOne(() => User, (user) => user.rides)
  @JoinColumn()
  passanger: User;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @OneToOne(() => Location)
  @JoinColumn({ name: 'start_location_id' })
  start_location: Location;

  @OneToOne(() => Location)
  @JoinColumn({ name: 'end_location_id' })
  end_location: Location;

  @Column({
    type: Number,
  })
  cost: number;

  @Column({
    type: Number,
  })
  status: number;
}
