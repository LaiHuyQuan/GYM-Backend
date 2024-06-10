import { Inject, Injectable } from '@nestjs/common';
import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { UpdateGymDto } from 'src/application/dtos/update-gym.dto';
import { Gym } from '../entities/gym.entity';
import { IGymRepository } from '../repositories/gym.repository.interface';
import { IGymUseCase } from '../usecases/gym.usecase';

@Injectable()
export class GymService implements IGymUseCase {
  constructor(
    @Inject('IGymRepository') private readonly gymRepository: IGymRepository,
  ) {}
  async FetchGymByName(roomName: string): Promise<Gym> {
    return this.gymRepository.findGymById(roomName);
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
