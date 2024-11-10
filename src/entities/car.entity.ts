import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Driver } from './drivers.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Driver, (driver) => driver.car)
  driver: Driver;

  @Column({
    type: String,
  })
  make: string;

  @Column({
    type: String,
  })
  model: string;

  @Column({
    type: Number,
  })
  year: number;

  @Column({
    type: String,
  })
  license_plate: string;

  @Column({
    type: String,
  })
  color: string;
}
