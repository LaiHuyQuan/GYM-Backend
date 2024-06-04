// src/infrastructure/orm/member.orm-entity.ts
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
import { RegistrationOrmEntity } from './registration.orm-entity';
import { ServiceHistoryOrmEntity } from './service-history.orm-entity';

@Entity()
export class MemberOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  memberId: string;

  @Column()
  fullName: string;

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

  @ManyToOne(() => GymOrmEntity, (gym) => gym.members)
  @JoinColumn({ name: 'gymId' })
  gym: GymOrmEntity;

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.member)
  feedback: FeedbackOrmEntity[];

  @OneToMany(() => RegistrationOrmEntity, (registration) => registration.member)
  registrations: RegistrationOrmEntity[];

  @OneToMany(
    () => ServiceHistoryOrmEntity,
    (serviceHistory) => serviceHistory.member,
  )
  serviceHistory: ServiceHistoryOrmEntity[];
}
