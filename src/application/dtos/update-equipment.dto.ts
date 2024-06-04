import {
  IsOptional,
  IsNumber,
  IsString,
  IsUUID,
  IsDate,
} from 'class-validator';

export class UpdateEquipmentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsDate()
  dateOfImport?: Date;

  @IsOptional()
  @IsDate()
  warrantyDate?: Date;

  @IsOptional()
  @IsString()
  origin?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsUUID()
  gymId?: string;
}
