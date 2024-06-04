import { Staff } from '../entities/staff.entity';
import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';

export interface IStaffRepository {
  createStaff(staff: CreateStaffDto): Promise<Staff>;
  getAllStaff(): Promise<Staff[]>;
  getStaffById(staffId: string): Promise<Staff>;
  updateStaff(staffId: string, staff: UpdateStaffDto): Promise<Staff>;
  deleteStaff(staffId: string): Promise<void>;
}
