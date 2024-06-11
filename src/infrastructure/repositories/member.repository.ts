import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { DeleteResult, Repository } from 'typeorm';
import { Member } from '../../domain/entities/member.entity';
import { IMemberRepository } from '../../domain/repositories/member.repository.interface';
import { GymOrmEntity } from '../orm/gym.orm-entity';
import { MemberOrmEntity } from '../orm/member.orm-entity';

@Injectable()
export class MemberRepositoryImpl implements IMemberRepository {
  constructor(
    @InjectRepository(MemberOrmEntity)
    private readonly memberRepository: Repository<MemberOrmEntity>,
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async insertMember(createMemberDto: CreateMemberDto): Promise<Member> {
    const gym = await this.gymRepository.findOne({
      where: { gymId: createMemberDto.gymId },
    });

    return this.memberRepository.save({
      ...createMemberDto,
      gym,
    });
  }

  async findAllMembers(): Promise<Member[]> {
    return await this.memberRepository.find({
      relations: ['gym'],
    });
  }

  async findMemberById(id: string): Promise<Member> {
    return await this.memberRepository.findOne({
      where: { user_id: id },
      relations: ['gym'],
    });
  }

  async updateMember(id: string, memberDto: UpdateMemberDto): Promise<Member> {
    const member = await this.findMemberById(id);
    if (!member) throw new Error('Member not found');

    const gym = await this.gymRepository.findOne({
      where: { gymId: memberDto.gymId },
    });
    if (!gym) throw new Error('Gym not found');

    if (!gym) throw new Error('Gym not found');
    await this.memberRepository.update(id, {
      ...memberDto,
      gym,
    });
    return this.findMemberById(id);
  }

  async deleteMember(id: string): Promise<DeleteResult> {
    const deleteResult = await this.memberRepository.delete(id);
    if (!deleteResult.affected) throw new Error('Member not found');
    return deleteResult;
  }
}
