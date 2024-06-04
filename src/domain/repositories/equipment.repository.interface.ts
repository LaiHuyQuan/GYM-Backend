import { DeleteResult } from 'typeorm';
import { Equipment } from '../entities/equipment.entity';
import { UpdateEquipmentDto } from 'src/application/dtos/update-equipment.dto';
import { CreateEquipmentDto } from 'src/application/dtos/create-equipment.dto';

export interface IEquipmentRepository {
  insertEquipmentInfo(equipment: CreateEquipmentDto): Promise<Equipment>;
  getAllEquipment(): Promise<Equipment[]>;
  getEquipmentById(equipmentId: string): Promise<Equipment>;
  updateEquipment(
    equipmentId: string,
    equipment: UpdateEquipmentDto,
  ): Promise<Equipment>;
  deleteEquipment(equipmentId: string): Promise<DeleteResult>;
}
