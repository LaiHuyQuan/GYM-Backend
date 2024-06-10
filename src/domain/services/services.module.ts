// services.module.ts
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { EquipmentService } from './equipment.service';
import { FeedbackService } from './feedback.service';
import { GymService } from './gym.service';
import { MemberService } from './member.service';
import { StaffService } from './staff.service';
import { TrainingPackageService } from './training-package.service';

@Module({
  imports: [RepositoriesModule, InfrastructureModule],
  providers: [
    {
      provide: 'IGymUseCase',
      useClass: GymService,
    },
    {
      provide: 'IEquipmentUseCase',
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
    {
      provide: 'IFeedbackUseCase',
      useClass: FeedbackService,
    },
    {
      provide: 'ITrainingPackageUseCase',
      useClass: TrainingPackageService,
    },
  ],
  exports: [
    {
      provide: 'IGymUseCase',
      useClass: GymService,
    },
    {
      provide: 'IEquipmentUseCase',
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
    {
      provide: 'IFeedbackUseCase',
      useClass: FeedbackService,
    },
    {
      provide: 'ITrainingPackageUseCase',
      useClass: TrainingPackageService,
    },
  ],
})
export class ServicesModule {}
