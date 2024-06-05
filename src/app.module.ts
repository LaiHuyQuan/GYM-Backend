import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { GymOrmEntity } from './infrastructure/orm/gym.orm-entity';
import { EquipmentOrmEntity } from './infrastructure/orm/equipment.orm-entity';
import { StaffOrmEntity } from './infrastructure/orm/staff.orm-entity';
import { MemberOrmEntity } from './infrastructure/orm/member.orm-entity';
import { TrainingPackageOrmEntity } from './infrastructure/orm/training-package.orm-entity';
import { FeedbackOrmEntity } from './infrastructure/orm/feedback.orm-entity';
import { RegistrationOrmEntity } from './infrastructure/orm/registration.orm-entity';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      GymOrmEntity,
      EquipmentOrmEntity,
      StaffOrmEntity,
      MemberOrmEntity,
      TrainingPackageOrmEntity,
      FeedbackOrmEntity,
      RegistrationOrmEntity,
    ]),
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
