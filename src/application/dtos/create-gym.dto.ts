import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  roomName: string;
  @IsString()
  @IsNotEmpty()
  trainingPackageId: string;
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  numberOfRooms: number;
}
