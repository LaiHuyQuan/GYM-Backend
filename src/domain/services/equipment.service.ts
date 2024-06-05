import { CreateEquipmentDto } from 'src/application/dtos/create-equipment.dto';
import { UpdateEquipmentDto } from 'src/application/dtos/update-equipment.dto';
import { Equipment } from '../entities/equipment.entity';
import { IEquipmentUseCase } from '../usecases/equipment.usecase';
import { IEquipmentRepository } from '../repositories/equipment.repository.interface';
import { Inject } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

export class EquipmentService implements IEquipmentUseCase {
  constructor(
    @Inject('IEquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository,
  ) {}
  fetchAllEquipment(): Promise<Equipment[]> {
    return this.equipmentRepository.getAllEquipment();
  }

  fetchEquipmentById(equipmentId: string): Promise<Equipment> {
    return this.equipmentRepository.getEquipmentById(equipmentId);
  }
  createEquipment(equipment: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentRepository.insertEquipmentInfo(equipment);
  }
  updateEquipment(
    equipmentId: string,
    equipment: UpdateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentRepository.updateEquipment(equipmentId, equipment);
  }
  deleteEquipment(equipmentId: string): Promise<DeleteResult> {
    return this.equipmentRepository.deleteEquipment(equipmentId);
  }
}
