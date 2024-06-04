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
    private readonly staffRepository: Repository<StaffOrmEntity>,
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async createStaff(staffDto: CreateStaffDto): Promise<Staff> {
    const gym = await this.gymRepository.findOne({
      where: { id: staffDto.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    const newStaff = this.staffRepository.create({ ...staffDto, gym });
    return await this.staffRepository.save(newStaff);
  }

  async getAllStaff(): Promise<Staff[]> {
    return await this.staffRepository.find({ relations: ['gym'] });
  }

  async getStaffById(staffId: string): Promise<Staff> {
    return await this.staffRepository.findOne({
      where: { staffId },
      relations: ['gym'],
    });
  }

  async updateStaff(
    staffId: string,
    updateStaffDto: UpdateStaffDto,
  ): Promise<Staff> {
    const staff = await this.staffRepository.findOne({
      where: { staffId },
      relations: ['gym'],
    });

    if (!staff) throw new Error('Staff not found');

    if (updateStaffDto.name) {
      staff.name = updateStaffDto.name;
    }
    if (updateStaffDto.role) {
      staff.role = updateStaffDto.role;
    }
    if (updateStaffDto.gymId) {
      staff.gym = await this.gymRepository.findOne({
        where: { id: updateStaffDto.gymId },
      });
    }

    return await this.staffRepository.save(staff);
  }

  async deleteStaff(staffId: string): Promise<void> {
    await this.staffRepository.delete(staffId);
  }
}
