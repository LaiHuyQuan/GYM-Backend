import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { DeleteResult } from 'typeorm';
import { Member } from '../entities/member.entity';

export interface IMemberUseCase {
  createMember(member: CreateMemberDto): Promise<Member>;
  getAllMembers(): Promise<Member[]>;
  getMemberById(id: string): Promise<Member>;
  updateMember(id: string, member: UpdateMemberDto): Promise<Member>;
  deleteMember(id: string): Promise<DeleteResult>;
}
