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
import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';
import { Feedback } from 'src/domain/entities/feedback.entity';
import { IFeedbackUseCase } from 'src/domain/usecases/feedback.usecase';

@Controller('feedback')
export class FeedbackController {
  constructor(
    @Inject('IFeedbackUseCase')
    private readonly feedbackService: IFeedbackUseCase,
  ) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }

  @Get()
  getAll(): Promise<Feedback[]> {
    return this.feedbackService.getAllFeedback();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.getFeedbackById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    return this.feedbackService.updateFeedback(id, updateFeedbackDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.feedbackService.deleteFeedback(id);
  }
}
