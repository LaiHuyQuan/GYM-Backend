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
export class MemberOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column('timestamptz')
  dor: Date;

  @Column()
  services: string;

  @Column('float')
  amount: number;

  @Column('timestamptz')
  paid_date: Date;

  @Column()
  p_year: number;

  @Column()
  plan: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column()
  status: string;

  @Column()
  gymId: string;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.members, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.member, {
    cascade: true,
  })
  feedback: FeedbackOrmEntity[];
}
