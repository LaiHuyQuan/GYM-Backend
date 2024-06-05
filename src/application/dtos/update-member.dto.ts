// src/application/dtos/update-member.dto.ts
import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateMemberDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  career?: string;

  @IsOptional()
  @IsDate()
  birthday?: string;

  @IsOptional()
  @IsString()
  memberType?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  gymId?: string;
}
