import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsDate,
  IsInt,
} from 'class-validator';

export class CreateEquipmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsDate()
  dateOfImport: Date;

  @IsNotEmpty()
  @IsDate()
  warrantyDate: Date;

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsUUID()
  gymId: string;
}
