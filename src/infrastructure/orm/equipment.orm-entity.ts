import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GymOrmEntity } from './gym.orm-entity';

@Entity()
export class EquipmentOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToOne(() => GymOrmEntity, (gym) => gym.equipment)
  gym: GymOrmEntity;
}
