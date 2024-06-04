// src/infrastructure/repositories/member.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { Member } from '../../domain/entities/member.entity';
import { IMemberRepository } from '../../domain/repositories/member.repository.interface';
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';

@Injectable()
export class MemberRepositoryImpl implements IMemberRepository {
  constructor(
    @InjectRepository(MemberOrmEntity)
    private readonly repository: Repository<MemberOrmEntity>,
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async insertMember(memberDto: CreateMemberDto): Promise<Member> {
    const gym = await this.gymRepository.findOne({
      where: { id: memberDto.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    const memberOrmEntity = this.repository.create({ ...memberDto, gym });
    return await this.repository.save(memberOrmEntity);
  }

  async findAllMembers(): Promise<Member[]> {
    return await this.repository.find({ relations: ['gym'] });
  }

  async findMemberById(id: string): Promise<Member> {
    return await this.repository.findOne({
      where: { memberId: id },
      relations: ['gym'],
    });
  }

  async updateMember(id: string, memberDto: UpdateMemberDto): Promise<Member> {
    const member = await this.repository.findOne({
      where: { memberId: id },
      relations: ['gym'],
    });
    if (!member) throw new Error('Member not found');

    const gym = await this.gymRepository.findOne({
      where: { id: memberDto.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    await this.repository.update(id, { ...memberDto, gym });
    return this.findMemberById(id);
  }

  async deleteMember(id: string): Promise<void> {
    const deleteResult = await this.repository.delete(id);
    if (!deleteResult.affected) throw new Error('Member not found');
  }
}
