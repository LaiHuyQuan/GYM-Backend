// src/domain/repositories/training-package.repository.interface.ts
import { TrainingPackage } from '../entities/training-package.entity';
import { CreateTrainingPackageDto } from 'src/application/dtos/create-training-package.dto';
import { UpdateTrainingPackageDto } from 'src/application/dtos/update-training-package.dto';

export interface ITrainingPackageRepository {
  createTrainingPackage(
    createTrainingPackageDto: CreateTrainingPackageDto,
  ): Promise<TrainingPackage>;
  getAllTrainingPackages(): Promise<TrainingPackage[]>;
  getTrainingPackageById(id: string): Promise<TrainingPackage>;
  updateTrainingPackage(
    id: string,
    updateTrainingPackageDto: UpdateTrainingPackageDto,
  ): Promise<TrainingPackage>;
  deleteTrainingPackage(id: string): Promise<void>;
}
