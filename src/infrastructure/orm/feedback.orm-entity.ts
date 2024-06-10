// src/infrastructure/orm/feedback.orm-entity.ts
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GymOrmEntity } from './gym.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';
import { StaffOrmEntity } from './staff.orm-entity';

@Entity()
export class FeedbackOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  feedbackId: string;

  @Column('text')
  feedback: string;

  @Column('timestamptz')
  date: Date;

  @ManyToOne(() => MemberOrmEntity, (member) => member.feedback)
  @JoinColumn({ name: 'memberId' })
  member: MemberOrmEntity;

  @Column()
  memberId: string;

  @ManyToOne(() => StaffOrmEntity, (staff) => staff.feedback)
  @JoinColumn({ name: 'staffId' })
  staff: StaffOrmEntity;

  @Column()
  staffId: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.feedbacks)
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @Column()
  gymId: string;
}
