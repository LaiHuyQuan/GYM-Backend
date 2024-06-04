import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MemberOrmEntity } from './member.orm-entity';

@Entity()
export class ServiceHistoryOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serviceDate: Date;

  @Column()
  description: string;

  @ManyToOne(() => MemberOrmEntity, (member) => member.serviceHistory)
  member: MemberOrmEntity;
}
