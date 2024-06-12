import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GymOrmEntity } from './gym.orm-entity';

@Entity()
export class TrainingPackageOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  trainingPackageId: string;

  @Column()
  name: string;

  @Column('int')
  duration: number; // Duration in days

  @Column('int')
  sessions: number; // Number of sessions

  @Column()
  price: number;

  @Column()
  description: string;

  @OneToMany(() => GymOrmEntity, (gym) => gym.trainingPackage, {
    cascade: true,
  })
  gyms: GymOrmEntity[];
}
