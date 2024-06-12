import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FeedbackOrmEntity } from './feedback.orm-entity';
import { GymOrmEntity } from './gym.orm-entity';

@Entity()
export class StaffOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  staffId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column()
  role: string;

  @Column()
  contact: string;

  @Column()
  gender: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.staff, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.staff, {
    cascade: true,
  })
  feedback: FeedbackOrmEntity[];
}
