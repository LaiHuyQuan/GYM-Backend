// src/controllers/member.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMemberDto } from 'src/application/dtos/create-member.dto';
import { UpdateMemberDto } from 'src/application/dtos/update-member.dto';
import { Member } from 'src/domain/entities/member.entity';
import { IMemberUseCase } from 'src/domain/usecases/member.usecase';
import { DeleteResult } from 'typeorm';

@Controller('members')
export class MemberController {
  constructor(
    @Inject('IMemberUseCase') private readonly memberUseCase: IMemberUseCase,
  ) {}

  @Post()
  async createMember(
    @Body() createMemberDto: CreateMemberDto,
  ): Promise<Member> {
    return await this.memberUseCase.createMember(createMemberDto);
  }

  @Get()
  async getAllMembers(): Promise<Member[]> {
    return await this.memberUseCase.getAllMembers();
  }

  @Get(':id')
  async getMemberById(@Param('id') id: string): Promise<Member> {
    return await this.memberUseCase.getMemberById(id);
  }

  @Patch(':id')
  async updateMember(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return await this.memberUseCase.updateMember(id, updateMemberDto);
  }

  @Delete(':id')
  async deleteMember(@Param('id') id: string): Promise<DeleteResult> {
    return await this.memberUseCase.deleteMember(id);
  }
}
