import { CreateRegistrationDto } from 'src/application/dtos/create-registration.dto';
import { UpdateRegistrationDto } from 'src/application/dtos/update-registration.dto';
import { Registration } from 'src/domain/entities/registration.entity';

export interface IRegistrationRepository {
  insertRegistration(
    registration: CreateRegistrationDto,
  ): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
  getRegistrationById(id: string): Promise<Registration>;
  updateRegistration(
    id: string,
    registration: UpdateRegistrationDto,
  ): Promise<Registration>;
  deleteRegistration(id: string): Promise<void>;
}
