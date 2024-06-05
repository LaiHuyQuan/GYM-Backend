// src/application/services/training-package.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ITrainingPackageRepository } from 'src/domain/repositories/training-package.repository.interface';
import { TrainingPackage } from 'src/domain/entities/training-package.entity';
import { CreateTrainingPackageDto } from 'src/application/dtos/create-training-package.dto';
import { UpdateTrainingPackageDto } from 'src/application/dtos/update-training-package.dto';
import { ITrainingPackageUseCase } from '../usecases/training-package.usecase';

@Injectable()
export class TrainingPackageService implements ITrainingPackageUseCase {
  constructor(
    @Inject('ITrainingPackageRepository')
    private readonly trainingPackageRepository: ITrainingPackageRepository,
  ) {}

  createTrainingPackage(
    createTrainingPackageDto: CreateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    return this.trainingPackageRepository.createTrainingPackage(
      createTrainingPackageDto,
    );
  }

  getAllTrainingPackages(): Promise<TrainingPackage[]> {
    return this.trainingPackageRepository.getAllTrainingPackages();
  }

  getTrainingPackageById(id: string): Promise<TrainingPackage> {
    return this.trainingPackageRepository.getTrainingPackageById(id);
  }

  updateTrainingPackage(
    id: string,
    updateTrainingPackageDto: UpdateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    return this.trainingPackageRepository.updateTrainingPackage(
      id,
      updateTrainingPackageDto,
    );
  }

  deleteTrainingPackage(id: string): Promise<void> {
    return this.trainingPackageRepository.deleteTrainingPackage(id);
  }
}
