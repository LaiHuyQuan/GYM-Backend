import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentOrmEntity } from '../orm/equipment.orm-entity';
import { FeedbackOrmEntity } from '../orm/feedback.orm-entity';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { OrmModule } from '../orm/orm.module';
import { StaffOrmEntity } from '../orm/staff.orm-entity';
import { TrainingPackageOrmEntity } from '../orm/training-package.orm-entity';
import { EquipmentRepositoryImpl } from './equipment.repository';
import { FeedbackRepositoryImpl } from './feedback.repository';
import { GymRepositoryImpl } from './gym.repository';
import { MemberRepositoryImpl } from './member.repository';
import { StaffRepositoryImpl } from './staff.repository';
import { TrainingPackageRepositoryImpl } from './training-package.repository';

@Module({
  imports: [
    OrmModule,
    TypeOrmModule.forFeature([
      GymOrmEntity,
      EquipmentOrmEntity,
      MemberOrmEntity,
      StaffOrmEntity,
      FeedbackOrmEntity,
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
