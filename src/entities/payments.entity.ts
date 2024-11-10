import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Rides } from './rides.entity';
import { PaymentMethod } from './payment.entity';

@Entity()
export class Payments {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Rides)
  @JoinColumn()
  ride: Rides;

  @OneToOne(() => Rides)
  @JoinColumn()
  payment_method: PaymentMethod;

  @Column({
    type: Number,
  })
  amount: number;

  @Column({
    type: Date,
  })
  payment_time: Date;

  @Column({
    type: String,
  })
  status: string;
}
