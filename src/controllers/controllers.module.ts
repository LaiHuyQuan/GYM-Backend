// controllers.module.ts
import { Module } from '@nestjs/common';
import { ServicesModule } from '../domain/services/services.module';
import { GymController } from './gym.controller';
import { EquipmentController } from './equipment.controller';
import { MemberController } from './member.controller';
import { StaffController } from './staff.controller';
import { RegistrationController } from './registration.controller';
import { FeedbackController } from './feedback.controller';
import { TrainingPackageController } from './training-package.controller';

@Module({
  imports: [ServicesModule],
  controllers: [
    GymController,
    EquipmentController,
    MemberController,
    StaffController,
    FeedbackController,
    RegistrationController,
    TrainingPackageController,
  ],
})
export class ControllersModule {}
