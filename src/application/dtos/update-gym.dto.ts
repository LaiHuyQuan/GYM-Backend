import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateGymDto {
  @IsOptional()
  @IsString()
  roomName?: string;
  @IsOptional()
  @IsInt()
  numberOfRooms?: number;
}
