import {
  Column,
  CreateDateColumn,
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
  memberId: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  career: string;

  @Column('timestamptz')
  birthday: string;

  @Column()
  memberType: string;

  @Column()
  address: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  gymId: string;

  @CreateDateColumn({ type: 'timestamptz' })
  registrationDate: Date;

  @Column('timestamptz')
  expireDate: Date;

  @Column()
  sessionsRemaining: number;

  @ManyToOne(() => GymOrmEntity, (gym) => gym.members)
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.member)
  feedback: FeedbackOrmEntity[];
}
