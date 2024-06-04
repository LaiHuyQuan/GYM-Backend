// src/application/dtos/update-staff.dto.ts
import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateStaffDto {
  @IsString()
  @IsOptional()
  public name?: string;

  @IsString()
  @IsOptional()
  public role?: string;

  @IsUUID()
  @IsOptional()
  public gymId?: string;
}
