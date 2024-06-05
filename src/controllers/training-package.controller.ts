// src/interfaces/controllers/training-package.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { CreateTrainingPackageDto } from 'src/application/dtos/create-training-package.dto';
import { UpdateTrainingPackageDto } from 'src/application/dtos/update-training-package.dto';
import { TrainingPackage } from 'src/domain/entities/training-package.entity';
import { ITrainingPackageUseCase } from 'src/domain/usecases/training-package.usecase';

@Controller('training-packages')
export class TrainingPackageController {
  constructor(
    @Inject('ITrainingPackageUseCase')
    private readonly trainingPackageService: ITrainingPackageUseCase,
  ) {}

  @Post()
  create(
    @Body() createTrainingPackageDto: CreateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    return this.trainingPackageService.createTrainingPackage(
      createTrainingPackageDto,
    );
  }

  @Get()
  getAll(): Promise<TrainingPackage[]> {
    return this.trainingPackageService.getAllTrainingPackages();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<TrainingPackage> {
    return this.trainingPackageService.getTrainingPackageById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingPackageDto: UpdateTrainingPackageDto,
  ): Promise<TrainingPackage> {
    return this.trainingPackageService.updateTrainingPackage(
      id,
      updateTrainingPackageDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.trainingPackageService.deleteTrainingPackage(id);
  }
}
