// src/domain/repositories/member.repository.interface.ts
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { Member } from '../entities/member.entity';
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';

export interface IMemberRepository {
  insertMember(member: CreateMemberDto): Promise<Member>;
  findAllMembers(): Promise<Member[]>;
  findMemberById(id: string): Promise<Member>;
  updateMember(id: string, member: UpdateMemberDto): Promise<Member>;
  deleteMember(id: string): Promise<void>;
}
