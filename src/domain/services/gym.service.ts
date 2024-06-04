import { Inject, Injectable } from '@nestjs/common';
import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { Gym } from '../entities/gym.entity';
import { IGymRepository } from '../repositories/gym.repository.interface';
import { IGymUseCases } from '../usecases/gym.usecase';
import { UpdateGymDto } from 'src/application/dtos/update-gym.dto';

@Injectable()
export class GymService implements IGymUseCases {
  constructor(
    @Inject('IGymRepository') private readonly gymRepository: IGymRepository,
  ) {}
  async FetchGymByName(roomName: string): Promise<Gym> {
    return this.gymRepository.findGymByCode(roomName);
  }

  async CreateGym(gym: CreateGymDto): Promise<Gym> {
    return this.gymRepository.insertGymInfo(gym);
  }
  async FetchGyms(): Promise<Gym[]> {
    return this.gymRepository.findAllGym();
  }

  async UpdateGym(roomCode: string, gym: UpdateGymDto): Promise<Gym> {
    return this.gymRepository.updateGymInfo(roomCode, gym);
  }
  async RemoveGym(roomCode: string): Promise<any> {
    return this.gymRepository.removeGym(roomCode);
  }
}
