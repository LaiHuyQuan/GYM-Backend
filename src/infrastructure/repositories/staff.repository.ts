import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';
import { Staff } from 'src/domain/entities/staff.entity';
import { IStaffRepository } from 'src/domain/repositories/staff.repository.interface';
import { DeleteResult, Repository } from 'typeorm';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { StaffOrmEntity } from '../orm/staff.orm-entity';

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
      where: { gymId: staffDto.gymId },
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

    if (updateStaffDto.username !== undefined) {
      staff.username = updateStaffDto.username;
    }
    if (updateStaffDto.password !== undefined) {
      staff.password = updateStaffDto.password;
    }
    if (updateStaffDto.email !== undefined) {
      staff.email = updateStaffDto.email;
    }
    if (updateStaffDto.fullname !== undefined) {
      staff.fullname = updateStaffDto.fullname;
    }
    if (updateStaffDto.address !== undefined) {
      staff.address = updateStaffDto.address;
    }
    if (updateStaffDto.role !== undefined) {
      staff.role = updateStaffDto.role;
    }
    if (updateStaffDto.contact !== undefined) {
      staff.contact = updateStaffDto.contact;
    }
    if (updateStaffDto.gender !== undefined) {
      staff.gender = updateStaffDto.gender;
    }
    if (updateStaffDto.gymId !== undefined) {
      const gym = await this.gymRepository.findOne({
        where: { gymId: updateStaffDto.gymId },
      });
      if (!gym) throw new NotFoundException('Gym not found');
      staff.gym = gym;
    }

    return await this.staffRepository.save(staff);
  }

  async deleteStaff(staffId: string): Promise<DeleteResult> {
    return await this.staffRepository.delete(staffId);
  }
}
