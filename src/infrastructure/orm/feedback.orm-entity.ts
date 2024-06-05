// src/infrastructure/orm/feedback.orm-entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
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

  @ManyToOne(() => StaffOrmEntity, (staff) => staff.feedback)
  @JoinColumn({ name: 'staffId' })
  staff: StaffOrmEntity;
}
