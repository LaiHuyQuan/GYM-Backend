import { Module } from '@nestjs/common';
import { EquipmentOrmEntity } from './equipment.orm-entity';
import { FeedbackOrmEntity } from './feedback.orm-entity';
import { GymOrmEntity } from './gym.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';
import { StaffOrmEntity } from './staff.orm-entity';
import { TrainingPackageOrmEntity } from './training-package.orm-entity';

@Module({
  providers: [
    GymOrmEntity,
    EquipmentOrmEntity,
    MemberOrmEntity,
    FeedbackOrmEntity,
    TrainingPackageOrmEntity,
    StaffOrmEntity,
  ],
  exports: [
    GymOrmEntity,
    EquipmentOrmEntity,
    MemberOrmEntity,
    FeedbackOrmEntity,
    TrainingPackageOrmEntity,
    StaffOrmEntity,
  ],
})
export class OrmModule {}
