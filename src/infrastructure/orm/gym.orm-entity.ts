import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EquipmentOrmEntity } from './equipment.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';
import { StaffOrmEntity } from './staff.orm-entity';

@Entity()
export class GymOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  gymId: string;

  @Column()
  roomName: string;

  @Column()
  numberOfRooms: number;

  @OneToMany(() => EquipmentOrmEntity, (equipment) => equipment.gym)
  equipment: EquipmentOrmEntity[];

  @OneToMany(() => StaffOrmEntity, (staff) => staff.gym)
  staff: StaffOrmEntity[];

  @OneToMany(() => MemberOrmEntity, (member) => member.gym)
  members: MemberOrmEntity[];
}
