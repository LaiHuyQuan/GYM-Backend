import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RegistrationOrmEntity } from './registration.orm-entity';

@Entity()
export class TrainingPackageOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  duration: number; // Duration in days

  @Column('int')
  sessions: number; // Number of sessions

  @Column()
  price: number;

  @OneToMany(
    () => RegistrationOrmEntity,
    (registration) => registration.trainingPackage,
  )
  registrations: RegistrationOrmEntity[];
}
