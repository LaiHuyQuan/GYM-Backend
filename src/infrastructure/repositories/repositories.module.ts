import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { GymRepositoryImpl } from './gym.repository';
import { EquipmentRepositoryImpl } from './equipment.repository';
import { EquipmentOrmEntity } from '../orm/equipment.orm-entity';
import { MemberRepositoryImpl } from './member.repository';
import { OrmModule } from '../orm/orm.module';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { StaffOrmEntity } from '../orm/staff.orm-entity';
import { StaffRepositoryImpl } from './staff.repository';

@Module({
  imports: [
    OrmModule,
    TypeOrmModule.forFeature([
      GymOrmEntity,
      EquipmentOrmEntity,
      MemberOrmEntity,
      StaffOrmEntity,
    ]),
  ],
  providers: [
    {
      provide: 'IGymRepository',
      useClass: GymRepositoryImpl,
    },
    {
      provide: 'IEquipmentRepository',
      useClass: EquipmentRepositoryImpl,
    },
    {
      provide: 'IMemberRepository',
      useClass: MemberRepositoryImpl,
    },
    {
      provide: 'IStaffRepository',
      useClass: StaffRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: 'IGymRepository',
      useClass: GymRepositoryImpl,
    },
    {
      provide: 'IEquipmentRepository',
      useClass: EquipmentRepositoryImpl,
    },
    {
      provide: 'IMemberRepository',
      useClass: MemberRepositoryImpl,
    },
    {
      provide: 'IStaffRepository',
      useClass: StaffRepositoryImpl,
    },
  ],
})
export class RepositoriesModule {}
