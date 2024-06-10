import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrainingPackageDto } from 'src/application/dtos/create-training-package.dto';
import { UpdateTrainingPackageDto } from 'src/application/dtos/update-training-package.dto';
import { TrainingPackage } from 'src/domain/entities/training-package.entity';
import { ITrainingPackageRepository } from 'src/domain/repositories/training-package.repository.interface';
import { Repository } from 'typeorm';
import { TrainingPackageOrmEntity } from '../orm/training-package.orm-entity';

export class TrainingPackageRepositoryImpl
  implements ITrainingPackageRepository
{
  constructor(
    @InjectRepository(TrainingPackageOrmEntity)
    private readonly trainingPackageRepository: Repository<TrainingPackageOrmEntity>,
  ) {}

  async createTrainingPackage(
    createTrainingPackageDto: CreateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    const trainingPackageOrmEntity = this.trainingPackageRepository.create(
      createTrainingPackageDto,
    );
    return await this.trainingPackageRepository.save(trainingPackageOrmEntity);
  }

  async getAllTrainingPackages(): Promise<TrainingPackage[]> {
    return await this.trainingPackageRepository.find();
  }

  async getTrainingPackageById(
    trainingPackageId: string,
  ): Promise<TrainingPackage> {
    return await this.trainingPackageRepository.findOneBy({
      trainingPackageId,
    });
  }

  async updateTrainingPackage(
    id: string,
    updateTrainingPackageDto: UpdateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    await this.trainingPackageRepository.update(id, updateTrainingPackageDto);
    return this.getTrainingPackageById(id);
  }

  async deleteTrainingPackage(id: string): Promise<void> {
    await this.trainingPackageRepository.delete(id);
  }
}
