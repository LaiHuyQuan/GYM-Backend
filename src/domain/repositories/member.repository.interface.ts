// src/domain/repositories/member.repository.interface.ts
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { DeleteResult } from 'typeorm';
import { Member } from '../entities/member.entity';

export interface IMemberRepository {
  insertMember(member: CreateMemberDto): Promise<Member>;
  findAllMembers(): Promise<Member[]>;
  findMemberById(id: string): Promise<Member>;
  updateMember(id: string, member: UpdateMemberDto): Promise<Member>;
  deleteMember(id: string): Promise<DeleteResult>;
}
