import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { UpdateGymDto } from 'src/application/dtos/update-gym.dto';
import { Gym } from 'src/domain/entities/gym.entity';
import { IGymUseCase } from 'src/domain/usecases/gym.usecase';

@Controller('gym')
export class GymController {
  constructor(@Inject('IGymUseCase') private readonly useCase: IGymUseCase) {}

  @Get()
  async FetchGyms(): Promise<Gym[]> {
    return await this.useCase.FetchGyms();
  }

  @Post()
  async CreateGym(@Body() createGym: CreateGymDto): Promise<Gym> {
    return await this.useCase.CreateGym(createGym);
  }

  // Update gym info
  @Patch(':roomCode')
  async UpdateGym(
    @Body() gym: UpdateGymDto,
    @Param('roomCode') roomCode: string,
  ): Promise<Gym> {
    return await this.useCase.UpdateGym(roomCode, gym);
  }

  // Remove gym
  @Delete(':roomCode')
  async RemoveGym(@Param('roomCode') roomCode: string): Promise<any> {
    return await this.useCase.RemoveGym(roomCode);
  }
}
