import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { GymOrmEntity } from './gym.orm-entity';
import { FeedbackOrmEntity } from './feedback.orm-entity';

@Entity()
export class StaffOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  staffId: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.staff)
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.staff)
  feedback: FeedbackOrmEntity[];
}
