import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Inject,
} from '@nestjs/common';
import { CreateRegistrationDto } from 'src/application/dtos/create-registration.dto';
import { Registration } from 'src/domain/entities/registration.entity';
import { IRegistrationUseCase } from 'src/domain/usecases/registration.usecase';

@Controller('registrations')
export class RegistrationController {
  constructor(
    @Inject('IRegistrationUseCase')
    private readonly registrationService: IRegistrationUseCase,
  ) {}

  @Post()
  async createRegistration(
    @Body() createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationService.createRegistration(createRegistrationDto);
  }

  @Get()
  async getAllRegistrations(): Promise<Registration[]> {
    return this.registrationService.getAllRegistrations();
  }

  @Get(':id')
  async getRegistrationById(@Param('id') id: string): Promise<Registration> {
    return this.registrationService.getRegistrationById(id);
  }

  @Put(':id')
  async updateRegistration(
    @Param('id') id: string,
    @Body() updateRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    return this.registrationService.updateRegistration(
      id,
      updateRegistrationDto,
    );
  }

  @Delete(':id')
  async deleteRegistration(@Param('id') id: string): Promise<void> {
    return this.registrationService.deleteRegistration(id);
  }
}
