// controllers.module.ts
import { Module } from '@nestjs/common';
import { ServicesModule } from '../domain/services/services.module';
import { GymController } from './gym.controller';
import { EquipmentController } from './equipment.controller';
import { MemberController } from './member.controller';
import { StaffController } from './staff.controller';

@Module({
  imports: [ServicesModule],
  controllers: [
    GymController,
    EquipmentController,
    MemberController,
    StaffController,
  ],
})
export class ControllersModule {}
