import { Inject, Injectable } from '@nestjs/common';
import { IRegistrationRepository } from 'src/domain/repositories/registration.repository.interface';
import { CreateRegistrationDto } from 'src/application/dtos/create-registration.dto';
import { Registration } from 'src/domain/entities/registration.entity';
import { IRegistrationUseCase } from '../usecases/registration.usecase';

@Injectable()
export class RegistrationService implements IRegistrationUseCase {
  constructor(
    @Inject('IRegistrationRepository')
    private readonly registrationRepository: IRegistrationRepository,
  ) {}

  async createRegistration(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationRepository.insertRegistration(
      createRegistrationDto,
    );
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return this.registrationRepository.getAllRegistrations();
  }

  async getRegistrationById(id: string): Promise<Registration> {
    return this.registrationRepository.getRegistrationById(id);
  }

  async updateRegistration(
    id: string,
    updateRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationRepository.updateRegistration(
      id,
      updateRegistrationDto,
    );
  }

  async deleteRegistration(id: string): Promise<void> {
    return this.registrationRepository.deleteRegistration(id);
  }
}
