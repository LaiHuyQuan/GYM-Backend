import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGymDto } from 'src/application/dtos/create-gym.dto';
import { UpdateGymDto } from 'src/application/dtos/update-gym.dto';
import { Gym } from 'src/domain/entities/gym.entity';
import { IGymRepository } from 'src/domain/repositories/gym.repository.interface';
import { DeleteResult, Repository } from 'typeorm';
import { GymOrmEntity } from '../orm/gym.orm-entity';

@Injectable()
export class GymRepositoryImpl implements IGymRepository {
  constructor(
    @InjectRepository(GymOrmEntity)
    private readonly repository: Repository<GymOrmEntity>,
  ) {}
  async insertGymInfo(gym: CreateGymDto): Promise<Gym> {
    const gymOrmEntity = this.repository.create(gym);
    return await this.repository.save(gymOrmEntity);
  }

  async findAllGym(): Promise<Gym[]> {
    return await this.repository.find();
  }

  async findGymById(id: string): Promise<Gym> {
    return await this.repository.findOneBy({ gymId: id });
  }

  async updateGymInfo(roomCode: string, gym: UpdateGymDto): Promise<Gym> {
    const gymOrmEntity = await this.repository.findOneBy({
      gymId: roomCode,
    });
    if (!gymOrmEntity) {
      throw new Error('Gym not found');
    }
    await this.repository.update(roomCode, gym);
    return this.findGymById(roomCode);
  }

  async removeGym(roomCode: string): Promise<DeleteResult> {
    return this.repository.delete({ gymId: roomCode });
  }
}
