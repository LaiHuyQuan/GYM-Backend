import { Module } from '@nestjs/common';
import { GymOrmEntity } from './gym.orm-entity';
import { EquipmentOrmEntity } from './equipment.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';

@Module({
  providers: [GymOrmEntity, EquipmentOrmEntity, MemberOrmEntity],
  exports: [GymOrmEntity, EquipmentOrmEntity, MemberOrmEntity],
})
export class OrmModule {}
