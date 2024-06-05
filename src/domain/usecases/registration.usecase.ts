import { CreateRegistrationDto } from 'src/application/dtos/create-registration.dto';
import { UpdateRegistrationDto } from 'src/application/dtos/update-registration.dto';
import { Registration } from 'src/domain/entities/registration.entity';

export interface IRegistrationUseCase {
  createRegistration(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
  getRegistrationById(id: string): Promise<Registration>;
  updateRegistration(
    id: string,
    updateRegistrationDto: UpdateRegistrationDto,
  ): Promise<Registration>;
  deleteRegistration(id: string): Promise<void>;
}
