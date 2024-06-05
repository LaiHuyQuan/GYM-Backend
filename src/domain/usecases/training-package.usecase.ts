// src/domain/use-cases/training-package.use-case.interface.ts
import { TrainingPackage } from '../entities/training-package.entity';
import { CreateTrainingPackageDto } from 'src/application/dtos/create-training-package.dto';
import { UpdateTrainingPackageDto } from 'src/application/dtos/update-training-package.dto';

export interface ITrainingPackageUseCase {
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
