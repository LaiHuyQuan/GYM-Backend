import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackOrmEntity } from '../orm/feedback.orm-entity';
import { IFeedbackRepository } from 'src/domain/repositories/feedback.repository.interface';
import { Feedback } from 'src/domain/entities/feedback.entity';
import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';
import { MemberOrmEntity } from '../orm/member.orm-entity';
import { StaffOrmEntity } from '../orm/staff.orm-entity';

export class FeedbackRepositoryImpl implements IFeedbackRepository {
  constructor(
    @InjectRepository(FeedbackOrmEntity)
    private readonly feedbackRepository: Repository<FeedbackOrmEntity>,
    @InjectRepository(MemberOrmEntity)
    private readonly memberRepository: Repository<MemberOrmEntity>,
    @InjectRepository(StaffOrmEntity)
    private readonly staffRepository: Repository<StaffOrmEntity>,
  ) {}

  async insertFeedback(feedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const member = await this.memberRepository.findOne({
      where: { memberId: feedbackDto.memberId },
    });
    const staff = await this.staffRepository.findOne({
      where: { staffId: feedbackDto.staffId },
    });

    const feedbackOrmEntity = this.feedbackRepository.create({
      ...feedbackDto,
      member,
      staff,
    });

    const savedFeedback = await this.feedbackRepository.save(feedbackOrmEntity);

    return new Feedback(
      savedFeedback.id,
      savedFeedback.content,
      savedFeedback.date,
      savedFeedback.member.memberId,
      savedFeedback.staff.id,
    );
  }

  async getAllFeedback(): Promise<Feedback[]> {
    const feedbackEntities = await this.feedbackRepository.find({
      relations: ['member', 'staff'],
    });

    return feedbackEntities.map(
      (feedback) =>
        new Feedback(
          feedback.id,
          feedback.feedback,
          feedback.date,
          feedback.member.id,
          feedback.staff.id,
        ),
    );
  }

  async getFeedbackById(id: string): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne(id, {
      relations: ['member', 'staff'],
    });

    if (!feedback) {
      return null;
    }

    return new Feedback(
      feedback.id,
      feedback.feedback,
      feedback.date,
      feedback.member.id,
      feedback.staff.id,
    );
  }

  async updateFeedback(
    id: string,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne(id, {
      relations: ['member', 'staff'],
    });

    if (!feedback) {
      return null;
    }

    if (updateFeedbackDto.feedback) {
      feedback.feedback = updateFeedbackDto.feedback;
    }
    if (updateFeedbackDto.date) {
      feedback.date = updateFeedbackDto.date;
    }
    if (updateFeedbackDto.memberId) {
      feedback.member = await this.memberRepository.findOne({
        where: { id: updateFeedbackDto.memberId },
      });
    }
    if (updateFeedbackDto.staffId) {
      feedback.staff = await this.staffRepository.findOne({
        where: { id: updateFeedbackDto.staffId },
      });
    }

    const updatedFeedback = await this.feedbackRepository.save(feedback);

    return new Feedback(
      updatedFeedback.id,
      updatedFeedback.feedback,
      updatedFeedback.date,
      updatedFeedback.member.id,
      updatedFeedback.staff.id,
    );
  }

  async deleteFeedback(id: string): Promise<void> {
    await this.feedbackRepository.delete(id);
  }
}
