import { UpdateGymDto } from 'src/application/dtos/update-gym.dto';
import { Gym } from '../entities/gym.entity';
import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { DeleteResult } from 'typeorm';

export interface IGymRepository {
  findAllGym(): Promise<Gym[]>;
  findGymByCode(roomCode: string): Promise<Gym | null>;
  insertGymInfo(gym: CreateGymDto): Promise<Gym>;
  updateGymInfo(roomCode: string, gym: UpdateGymDto): Promise<Gym>;
  removeGym(roomCode: string): Promise<DeleteResult>;
}
