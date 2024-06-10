import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from './application/application.module';
import { ControllersModule } from './controllers/controllers.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { EquipmentOrmEntity } from './infrastructure/orm/equipment.orm-entity';
import { FeedbackOrmEntity } from './infrastructure/orm/feedback.orm-entity';
import { GymOrmEntity } from './infrastructure/orm/gym.orm-entity';
import { MemberOrmEntity } from './infrastructure/orm/member.orm-entity';
import { StaffOrmEntity } from './infrastructure/orm/staff.orm-entity';
import { TrainingPackageOrmEntity } from './infrastructure/orm/training-package.orm-entity';
import config from './ormconfig';

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
