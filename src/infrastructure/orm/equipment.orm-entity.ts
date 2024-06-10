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

  @Column('int')
  quantity: number;

  @Column('date')
  dateOfImport: Date;

  @Column('date')
  warrantyDate: Date;

  @Column()
  origin: string;

  @Column()
  status: string;

  @Column()
  gymId: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.equipment)
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;
}
