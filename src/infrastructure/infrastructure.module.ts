import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { OrmModule } from './orm/orm.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [DatabaseModule, OrmModule, RepositoriesModule],
  exports: [RepositoriesModule],
})
export class InfrastructureModule {}
