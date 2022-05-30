import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
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
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  description: string;

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

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  olxUrl: string;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  allegroUrl: string;
}
