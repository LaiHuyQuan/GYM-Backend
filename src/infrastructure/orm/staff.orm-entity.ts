import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
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
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.staff)
  feedback: FeedbackOrmEntity[];
}
