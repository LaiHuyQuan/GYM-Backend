import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { Feedback } from '../entities/feedback.entity';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';

export interface IFeedbackRepository {
  insertFeedback(feedback: CreateFeedbackDto): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;
  getFeedbackById(id: string): Promise<Feedback>;
  updateFeedback(id: string, feedback: UpdateFeedbackDto): Promise<Feedback>;
  deleteFeedback(id: string): Promise<void>;
}
