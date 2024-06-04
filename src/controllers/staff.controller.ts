// src/controllers/staff.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStaffDto } from 'src/application/dtos/create-staff.dto';
import { UpdateStaffDto } from 'src/application/dtos/update-staff.dto';
import { IStaffUseCase } from 'src/domain/usecases/staff.usecase';

@Controller('staff')
export class StaffController {
  constructor(
    @Inject('IStaffUseCase') private readonly staffUseCase: IStaffUseCase,
  ) {}

  @Post()
  async createStaff(@Body() createStaffDto: CreateStaffDto) {
    return await this.staffUseCase.createStaff(createStaffDto);
  }

  @Get()
  async getAllStaff() {
    return await this.staffUseCase.getAllStaff();
  }

  @Get(':id')
  async getStaffById(@Param('id') id: string) {
    return await this.staffUseCase.getStaffById(id);
  }

  @Put(':id')
  async updateStaff(
    @Param('id') id: string,
    @Body() updateStaffDto: UpdateStaffDto,
  ) {
    return await this.staffUseCase.updateStaff(id, updateStaffDto);
  }

  @Delete(':id')
  async deleteStaff(@Param('id') id: string) {
    return await this.staffUseCase.deleteStaff(id);
  }
}
