import { TrainingPackage } from 'src/domain/entities/training-package.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EquipmentOrmEntity } from './equipment.orm-entity';
import { FeedbackOrmEntity } from './feedback.orm-entity';
import { MemberOrmEntity } from './member.orm-entity';
import { StaffOrmEntity } from './staff.orm-entity';
import { TrainingPackageOrmEntity } from './training-package.orm-entity';

@Entity()
export class GymOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  gymId: string;

  @Column('uuid')
  trainingPackageId: string;

  @Column()
  roomName: string;

  @Column()
  numberOfRooms: number;

  @OneToMany(() => EquipmentOrmEntity, (equipment) => equipment.gym, {
    cascade: true,
  })
  equipments: EquipmentOrmEntity[];

  @OneToMany(() => StaffOrmEntity, (staff) => staff.gym, { cascade: true })
  staff: StaffOrmEntity[];

  @OneToMany(() => MemberOrmEntity, (member) => member.gym, { cascade: true })
  members: MemberOrmEntity[];

  @OneToMany(() => FeedbackOrmEntity, (feedback) => feedback.gym, {
    cascade: true,
  })
  feedbacks: FeedbackOrmEntity[];

  @ManyToOne(
    () => TrainingPackageOrmEntity,
    (trainingPackage) => trainingPackage.gyms,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn({ name: 'trainingPackageId' })
  trainingPackage: TrainingPackage;
}
