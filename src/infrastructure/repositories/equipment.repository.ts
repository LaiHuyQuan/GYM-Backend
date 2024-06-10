import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEquipmentDto } from 'src/application/dtos/create-equipment.dto';
import { UpdateEquipmentDto } from 'src/application/dtos/update-equipment.dto';
import { Equipment } from 'src/domain/entities/equipment.entity';
import { IEquipmentRepository } from 'src/domain/repositories/equipment.repository.interface';
import { DeleteResult, Repository } from 'typeorm';
import { EquipmentOrmEntity } from '../orm/equipment.orm-entity';
import { GymOrmEntity } from '../orm/gym.orm-entity';

export class EquipmentRepositoryImpl implements IEquipmentRepository {
  constructor(
    @InjectRepository(EquipmentOrmEntity)
    private readonly repository: Repository<EquipmentOrmEntity>,
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async insertEquipmentInfo(equipment: CreateEquipmentDto): Promise<Equipment> {
    const gym = await this.gymRepository.findOne({
      where: { gymId: equipment.gymId },
    });
    const newEquipment = this.repository.create({ ...equipment, gym });
    return await this.repository.save(newEquipment);
  }

  async getAllEquipment(): Promise<Equipment[]> {
    return await this.repository.find({ relations: ['gym'] });
  }

  async getEquipmentById(id: string): Promise<Equipment> {
    return await this.repository.findOne({
      where: { equipmentId: id },
      relations: ['gym'],
    });
  }
  async updateEquipment(
    id: string,
    equipment: UpdateEquipmentDto,
  ): Promise<Equipment> {
    const existingEquipment = await this.getEquipmentById(id);
    if (!existingEquipment) {
      throw new NotFoundException(`Equipment with ID ${id} not found`);
    }
    await this.repository.update(id, equipment);
    return this.getEquipmentById(id);
  }

  async deleteEquipment(equipmentId: string): Promise<DeleteResult> {
    const result = await this.repository.delete(equipmentId);
    if (result.affected === 0) {
      throw new NotFoundException(`Equipment with ID ${equipmentId} not found`);
    }
    return result;
  }
}
