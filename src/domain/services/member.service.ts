// src/domain/services/member.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { IMemberRepository } from '../repositories/member.repository.interface';
import { Member } from '../entities/member.entity';
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { IMemberUseCase } from '../usecases/member.usecase';

@Injectable()
export class MemberService implements IMemberUseCase {
  constructor(
    @Inject('IMemberRepository')
    private readonly memberRepository: IMemberRepository,
  ) {}

  async createMember(memberDto: CreateMemberDto): Promise<Member> {
    return await this.memberRepository.insertMember(memberDto);
  }

  async getAllMembers(): Promise<Member[]> {
    return await this.memberRepository.findAllMembers();
  }

  async getMemberById(id: string): Promise<Member> {
    return await this.memberRepository.findMemberById(id);
  }

  async updateMember(id: string, memberDto: UpdateMemberDto): Promise<Member> {
    return await this.memberRepository.updateMember(id, memberDto);
  }

  async deleteMember(id: string): Promise<void> {
    await this.memberRepository.deleteMember(id);
  }
}
