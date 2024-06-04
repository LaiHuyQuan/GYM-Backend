// src/domain/services/staff.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';
import { Staff } from '../entities/staff.entity';
import { IStaffRepository } from '../repositories/staff.repository.interface';
import { IStaffUseCase } from '../usecases/staff.usecase';

@Injectable()
export class StaffService implements IStaffUseCase {
  constructor(
    @Inject('IStaffRepository')
    private readonly staffRepository: IStaffRepository,
  ) {}

  async createStaff(staff: CreateStaffDto): Promise<Staff> {
    return await this.staffRepository.createStaff(staff);
  }

  async getAllStaff(): Promise<Staff[]> {
    return await this.staffRepository.getAllStaff();
  }

  async getStaffById(staffId: string): Promise<Staff> {
    return await this.staffRepository.getStaffById(staffId);
  }

  async updateStaff(staffId: string, staff: UpdateStaffDto): Promise<Staff> {
    return await this.staffRepository.updateStaff(staffId, staff);
  }

  async deleteStaff(staffId: string): Promise<void> {
    await this.staffRepository.deleteStaff(staffId);
  }
}
