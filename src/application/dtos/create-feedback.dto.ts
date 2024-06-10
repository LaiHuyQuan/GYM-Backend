import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  feedback: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsString()
  memberId?: string;

  @IsOptional()
  @IsString()
  staffId?: string;

  @IsNotEmpty()
  @IsString()
  gymId: string;
}
