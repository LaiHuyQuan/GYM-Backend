import { Module } from '@nestjs/common';
import { GymOrmEntity } from './gym.orm-entity';
import { EquipmentOrmEntity } from './equipment.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';
import { FeedbackOrmEntity } from './feedback.orm-entity';
import { RegistrationOrmEntity } from './registration.orm-entity';
import { TrainingPackageOrmEntity } from './training-package.orm-entity';
import { StaffOrmEntity } from './staff.orm-entity';

@Module({
  providers: [
    GymOrmEntity,
    EquipmentOrmEntity,
    MemberOrmEntity,
    FeedbackOrmEntity,
    TrainingPackageOrmEntity,
    StaffOrmEntity,
    RegistrationOrmEntity,
  ],
  exports: [
    GymOrmEntity,
    EquipmentOrmEntity,
    MemberOrmEntity,
    FeedbackOrmEntity,
    TrainingPackageOrmEntity,
    StaffOrmEntity,
    RegistrationOrmEntity,
  ],
})
export class OrmModule {}
