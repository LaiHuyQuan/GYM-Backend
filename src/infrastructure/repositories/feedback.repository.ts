// src/infrastructure/repositories/feedback.repository.impl.ts
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

  async createFeedback(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<Feedback> {
    const member = await this.memberRepository.findOne({
      where: { memberId: createFeedbackDto.memberId },
    });
    const staff = await this.staffRepository.findOne({
      where: { staffId: createFeedbackDto.staffId },
    });

    const feedbackOrmEntity = this.feedbackRepository.create({
      ...createFeedbackDto,
      member,
      staff,
    });

    const savedEntity = await this.feedbackRepository.save(feedbackOrmEntity);
    return new Feedback(
      savedEntity.feedbackId,
      savedEntity.feedback,
      savedEntity.date,
      savedEntity.member.memberId,
      savedEntity.staff.staffId,
    );
  }

  async getAllFeedback(): Promise<Feedback[]> {
    const entities = await this.feedbackRepository.find({
      relations: ['member', 'staff'],
    });
    return entities.map(
      (entity) =>
        new Feedback(
          entity.feedbackId,
          entity.feedback,
          entity.date,
          entity.member.memberId,
          entity.staff.staffId,
        ),
    );
  }

  async getFeedbackById(id: string): Promise<Feedback> {
    const entity = await this.feedbackRepository.findOne({
      where: { feedbackId: id },
      relations: ['member', 'staff'],
    });
    return new Feedback(
      entity.feedbackId,
      entity.feedback,
      entity.date,
      entity.member.memberId,
      entity.staff.staffId,
    );
  }

  async updateFeedback(
    id: string,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    await this.feedbackRepository.update(id, updateFeedbackDto);
    return this.getFeedbackById(id);
  }

  async deleteFeedback(id: string): Promise<void> {
    await this.feedbackRepository.delete(id);
  }
}
