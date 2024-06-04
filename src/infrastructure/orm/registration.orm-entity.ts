// src/infrastructure/orm/registration.orm-entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MemberOrmEntity } from './member.orm-entity';
import { TrainingPackageOrmEntity } from './training-package.orm-entity';

@Entity()
export class RegistrationOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamptz')
  registrationDate: Date;

  @Column('timestamptz')
  expiryDate: Date;

  @Column('int')
  sessionsRemaining: number;

  @ManyToOne(() => MemberOrmEntity, (member) => member.registrations)
  member: MemberOrmEntity;

  @ManyToOne(
    () => TrainingPackageOrmEntity,
    (trainingPackage) => trainingPackage.registrations,
  )
  trainingPackage: TrainingPackageOrmEntity;
}
