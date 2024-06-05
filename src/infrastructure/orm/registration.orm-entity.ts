// src/infrastructure/orm/registration.orm-entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MemberOrmEntity } from './member.orm-entity';
import { TrainingPackageOrmEntity } from './training-package.orm-entity';

@Entity()
export class RegistrationOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  registrationId: string;

  @Column('timestamptz')
  registrationDate: Date;

  @Column('timestamptz')
  expireDate: Date;

  @Column('int')
  sessionsRemaining: number;

  @ManyToOne(() => MemberOrmEntity, (member) => member.registrations)
  @JoinColumn({ name: 'memberId' })
  member: MemberOrmEntity;

  @ManyToOne(
    () => TrainingPackageOrmEntity,
    (trainingPackage) => trainingPackage.registrations,
  )
  @JoinColumn({ name: 'trainingPkgId' })
  trainingPackage: TrainingPackageOrmEntity;
}
