// domain.module.ts
import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [EntitiesModule, RepositoriesModule, ServicesModule],
})
export class DomainModule {}
