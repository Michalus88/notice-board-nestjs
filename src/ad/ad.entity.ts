import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 7,
    nullable: true,
  })
  lat: number;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 7,
    nullable: true,
  })
  lon: number;
}
