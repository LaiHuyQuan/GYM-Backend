// src/infrastructure/repositories/staff.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IStaffRepository } from 'src/domain/repositories/staff.repository.interface';
import { StaffOrmEntity } from '../orm/staff.orm-entity';
import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';
import { Staff } from 'src/domain/entities/staff.entity';
import { GymOrmEntity } from '../orm/gym.orm-entity';

@Injectable()
export class StaffRepositoryImpl implements IStaffRepository {
  constructor(
    @InjectRepository(StaffOrmEntity)
    private readonly repository: Repository<StaffOrmEntity>,
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async createStaff(staff: CreateStaffDto): Promise<Staff> {
    const gym = await this.gymRepository.findOne({
      where: { id: staff.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    const newStaff = this.repository.create({ ...staff, gym });
    return await this.repository.save(newStaff);
  }

  async getAllStaff(): Promise<Staff[]> {
    return await this.repository.find({ relations: ['gym'] });
  }

  async getStaffById(staffId: string): Promise<Staff> {
    return await this.repository.findOne({
      where: { staffId },
      relations: ['gym'],
    });
  }

  async updateStaff(staffId: string, staffDto: UpdateStaffDto): Promise<Staff> {
    const staff = this.getStaffById(staffId);
    if (!staff) throw new Error('Staff not found');

    const gym = await this.gymRepository.findOne({
      where: { id: staffDto.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    await this.repository.update(staffId, { ...staffDto, gym });
    return this.getStaffById(staffId);
  }

  async deleteStaff(staffId: string): Promise<void> {
    await this.repository.delete(staffId);
  }
}
