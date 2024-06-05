import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { Gym } from '../entities/gym.entity';
import { DeleteResult } from 'typeorm';

export interface IGymUseCase {
  FetchGyms(): Promise<Gym[]>;
  FetchGymByName(roomCode: string): Promise<Gym>;
  CreateGym(gym: CreateGymDto): Promise<Gym>;
  UpdateGym(roomCode: string, gym: any): Promise<Gym>;
  RemoveGym(roomCode: string): Promise<DeleteResult>;
}
