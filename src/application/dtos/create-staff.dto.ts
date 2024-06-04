import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public role: string;

  @IsUUID()
  @IsNotEmpty()
  public gymId: string;
}
