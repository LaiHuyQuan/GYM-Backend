import { InjectRepository } from '@nestjs/typeorm';
import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';
import { Feedback } from 'src/domain/entities/feedback.entity';
import { IFeedbackRepository } from 'src/domain/repositories/feedback.repository.interface';
import { Repository } from 'typeorm';
import { FeedbackOrmEntity } from '../orm/feedback.orm-entity';
import { GymOrmEntity } from '../orm/gym.orm-entity';
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
    @InjectRepository(GymOrmEntity)
    private readonly gymRepository: Repository<GymOrmEntity>,
  ) {}

  async createFeedback(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<Feedback> {
    let member;
    if (createFeedbackDto.memberId) {
      member = await this.memberRepository.findOne({
        where: { user_id: createFeedbackDto.memberId },
      });

      if (!member) {
        throw new Error('Member with the provided memberId does not exist');
      }
    }

    let staff;
    if (createFeedbackDto.staffId) {
      staff = await this.staffRepository.findOne({
        where: { staffId: createFeedbackDto.staffId },
      });

      if (!staff) {
        throw new Error('Staff with the provided staffId does not exist');
      }
    }

    const gym = await this.gymRepository.findOne({
      where: { gymId: createFeedbackDto.gymId },
    });

    if (!gym) {
      throw new Error('Gym with the provided gymId does not exist');
    }

    const feedbackOrmEntity = this.feedbackRepository.create({
      ...createFeedbackDto,
      member,
      staff,
      gym,
    });

    return await this.feedbackRepository.save(feedbackOrmEntity);
  }

  async getAllFeedback(): Promise<Feedback[]> {
    return await this.feedbackRepository.find({
      relations: ['member', 'staff'],
    });
  }

  async getFeedbackById(id: string): Promise<Feedback> {
    return await this.feedbackRepository.findOne({
      where: { feedbackId: id },
      relations: ['member', 'staff'],
    });
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
