// src/application/services/feedback.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { IFeedbackRepository } from 'src/domain/repositories/feedback.repository.interface';
import { Feedback } from 'src/domain/entities/feedback.entity';
import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';
import { IFeedbackUseCase } from '../usecases/feedback.usecase';

@Injectable()
export class FeedbackService implements IFeedbackUseCase {
  constructor(
    @Inject('IFeedbackRepository')
    private readonly feedbackRepository: IFeedbackRepository,
  ) {}

  createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackRepository.createFeedback(createFeedbackDto);
  }

  getAllFeedback(): Promise<Feedback[]> {
    return this.feedbackRepository.getAllFeedback();
  }

  getFeedbackById(id: string): Promise<Feedback> {
    return this.feedbackRepository.getFeedbackById(id);
  }

  updateFeedback(
    id: string,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    return this.feedbackRepository.updateFeedback(id, updateFeedbackDto);
  }

  deleteFeedback(id: string): Promise<void> {
    return this.feedbackRepository.deleteFeedback(id);
  }
}
