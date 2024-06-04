import { Module } from '@nestjs/common';
import { DtosModule } from './dtos/dtos.module';

@Module({
  imports: [DtosModule],
})
export class ApplicationModule {}
