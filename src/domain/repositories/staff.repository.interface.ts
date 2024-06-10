import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';
import { DeleteResult } from 'typeorm';
import { Staff } from '../entities/staff.entity';

export interface IStaffRepository {
  createStaff(staff: CreateStaffDto): Promise<Staff>;
  getAllStaff(): Promise<Staff[]>;
  getStaffById(staffId: string): Promise<Staff>;
  updateStaff(staffId: string, staff: UpdateStaffDto): Promise<Staff>;
  deleteStaff(staffId: string): Promise<DeleteResult>;
}
