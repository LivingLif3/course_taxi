import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  address: string;

  @Column({
    type: String,
  })
  city: string;

  @Column({
    type: Number,
  })
  latitude: Number;

  @Column({
    type: Number,
  })
  longitude: Number;
}
