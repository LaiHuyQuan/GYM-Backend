import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { GymRepositoryImpl } from './gym.repository';
import { EquipmentRepositoryImpl } from './equipment.repository';
import { EquipmentOrmEntity } from '../orm/equipment.orm-entity';
import { MemberRepositoryImpl } from './member.repository';
import { OrmModule } from '../orm/orm.module';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { StaffOrmEntity } from '../orm/staff.orm-entity';
import { StaffRepositoryImpl } from './staff.repository';
import { RegistrationRepositoryImpl } from './registration.repository';
import { FeedbackRepositoryImpl } from './feedback.repository';
import { TrainingPackageRepositoryImpl } from './training-package.repository';
import { FeedbackOrmEntity } from '../orm/feedback.orm-entity';
import { RegistrationOrmEntity } from '../orm/registration.orm-entity';
import { TrainingPackageOrmEntity } from '../orm/training-package.orm-entity';

@Module({
  imports: [
    OrmModule,
    TypeOrmModule.forFeature([
      GymOrmEntity,
      EquipmentOrmEntity,
      MemberOrmEntity,
      StaffOrmEntity,
      FeedbackOrmEntity,
      RegistrationOrmEntity,
      TrainingPackageOrmEntity,
    ]),
  ],
  providers: [
    {
      provide: 'IGymRepository',
      useClass: GymRepositoryImpl,
    },
    {
      provide: 'IEquipmentRepository',
      useClass: EquipmentRepositoryImpl,
    },
    {
      provide: 'IMemberRepository',
      useClass: MemberRepositoryImpl,
    },
    {
      provide: 'IStaffRepository',
      useClass: StaffRepositoryImpl,
    },
    {
      provide: 'IRegistrationRepository',
      useClass: RegistrationRepositoryImpl,
    },
    {
      provide: 'IFeedbackRepository',
      useClass: FeedbackRepositoryImpl,
    },
    {
      provide: 'ITrainingPackageRepository',
      useClass: TrainingPackageRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: 'IGymRepository',
      useClass: GymRepositoryImpl,
    },
    {
      provide: 'IEquipmentRepository',
      useClass: EquipmentRepositoryImpl,
    },
    {
      provide: 'IMemberRepository',
      useClass: MemberRepositoryImpl,
    },
    {
      provide: 'IStaffRepository',
      useClass: StaffRepositoryImpl,
    },
    {
      provide: 'IRegistrationRepository',
      useClass: RegistrationRepositoryImpl,
    },
    {
      provide: 'IFeedbackRepository',
      useClass: FeedbackRepositoryImpl,
    },
    {
      provide: 'ITrainingPackageRepository',
      useClass: TrainingPackageRepositoryImpl,
    },
  ],
})
export class RepositoriesModule {}
