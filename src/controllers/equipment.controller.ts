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
import { CreateEquipmentDto } from 'src/application/dtos/create-equipment.dto';
import { UpdateEquipmentDto } from 'src/application/dtos/update-equipment.dto';
import { Equipment } from '../domain/entities/equipment.entity';
import { IEquipmentUseCase } from 'src/domain/usecases/equipment.usecase';

@Controller('equipment')
export class EquipmentController {
  constructor(
    @Inject('IEquipmentUseCase')
    private readonly equipmentUseCase: IEquipmentUseCase,
  ) {}

  @Post()
  async create(
    @Body() createEquipmentDto: CreateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentUseCase.createEquipment(createEquipmentDto);
  }

  @Get()
  async findAll(): Promise<Equipment[]> {
    return this.equipmentUseCase.fetchAllEquipment();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Equipment> {
    return this.equipmentUseCase.fetchEquipmentById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentUseCase.updateEquipment(id, updateEquipmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.equipmentUseCase.deleteEquipment(id);
  }
}
