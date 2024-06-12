import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GymOrmEntity } from './gym.orm-entity';

@Entity()
export class EquipmentOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  equipmentId: string;

  @Column()
  name: string;

  @Column('float')
  amount: number;

  @Column()
  quantity: number;

  @Column()
  vendor: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column('timestamptz')
  dateOfImport: Date;

  @Column()
  gymId: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.equipments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;
}
