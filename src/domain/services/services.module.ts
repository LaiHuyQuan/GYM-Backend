// services.module.ts
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { EquipmentService } from './equipment.service';
import { GymService } from './gym.service';
import { MemberService } from './member.service';
import { StaffService } from './staff.service';

@Module({
  imports: [RepositoriesModule, InfrastructureModule],
  providers: [
    {
      provide: 'IGymUseCases',
      useClass: GymService,
    },
    {
      provide: 'IEquipmentUseCases',
      useClass: EquipmentService,
    },
    {
      provide: 'IMemberUseCase',
      useClass: MemberService,
    },
    {
      provide: 'IStaffUseCase',
      useClass: StaffService,
    },
  ],
  exports: [
    {
      provide: 'IGymUseCases',
      useClass: GymService,
    },
    {
      provide: 'IEquipmentUseCases',
      useClass: EquipmentService,
    },
    {
      provide: 'IMemberUseCase',
      useClass: MemberService,
    },
    {
      provide: 'IStaffUseCase',
      useClass: StaffService,
    },
  ],
})
export class ServicesModule {}
