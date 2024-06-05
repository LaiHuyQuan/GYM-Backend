import { CreateEquipmentDto } from 'src/application/dtos/create-equipment.dto';
import { Equipment } from '../entities/equipment.entity';
import { UpdateEquipmentDto } from 'src/application/dtos/update-equipment.dto';

export interface IEquipmentUseCase {
  fetchAllEquipment(): Promise<Equipment[]>;
  fetchEquipmentById(equipmentId: string): Promise<Equipment>;
  createEquipment(equipment: CreateEquipmentDto): Promise<Equipment>;
  updateEquipment(
    equipmentId: string,
    equipment: UpdateEquipmentDto,
  ): Promise<Equipment>;
  deleteEquipment(equipmentId: string): Promise<any>;
}
