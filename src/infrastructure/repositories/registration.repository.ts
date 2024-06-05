import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationOrmEntity } from '../orm/registration.orm-entity';
import { IRegistrationRepository } from 'src/domain/repositories/registration.repository.interface';
import { CreateRegistrationDto } from 'src/application/dtos/create-registration.dto';
import { Registration } from 'src/domain/entities/registration.entity';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { TrainingPackageOrmEntity } from '../orm/training-package.orm-entity';

export class RegistrationRepositoryImpl implements IRegistrationRepository {
  constructor(
    @InjectRepository(RegistrationOrmEntity)
    private readonly registrationRepository: Repository<RegistrationOrmEntity>,
    @InjectRepository(MemberOrmEntity)
    private readonly memberRepository: Repository<MemberOrmEntity>,
    @InjectRepository(TrainingPackageOrmEntity)
    private readonly trainingPackageRepository: Repository<TrainingPackageOrmEntity>,
  ) {}

  async insertRegistration(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const member = await this.memberRepository.findOne({
      where: { memberId: createRegistrationDto.memberId },
    });
    const trainingPackage = await this.trainingPackageRepository.findOne({
      where: { trainingPackageId: createRegistrationDto.trainingPackageId },
    });

    const registration = this.registrationRepository.create({
      ...createRegistrationDto,
      member,
      trainingPackage,
    });

    return await this.registrationRepository.save(registration);
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return this.registrationRepository.find({
      relations: ['member', 'trainingPackage'],
    });
  }

  async getRegistrationById(id: string): Promise<Registration> {
    return this.registrationRepository.findOne({
      where: { registrationId: id },
      relations: ['member', 'trainingPackage'],
    });
  }

  async updateRegistration(
    id: string,
    updateRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    await this.registrationRepository.update(id, updateRegistrationDto);
    return this.getRegistrationById(id);
  }

  async deleteRegistration(id: string): Promise<void> {
    await this.registrationRepository.delete(id);
  }
}
