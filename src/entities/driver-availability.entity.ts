import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Driver } from './drivers.entity';
import { Location } from './location.entity';

@Entity()
export class DriverAvailability {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Driver)
  @JoinColumn()
  driver: Driver;

  @Column({
    type: Date,
  })
  available_from: Date;

  @Column({
    type: Date,
  })
  available_until: Date;

  @OneToOne(() => Location)
  @JoinColumn()
  pickup_location: Location;
}
