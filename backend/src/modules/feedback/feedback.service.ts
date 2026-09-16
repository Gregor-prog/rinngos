import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FeedbackCategory, FeedbackStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  contact?: string;

  @IsEnum(FeedbackCategory)
  category: FeedbackCategory;

  @IsString()
  @IsNotEmpty()
  message: string;
}

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFeedbackDto) {
    return this.prisma.feedback.create({
      data: dto,
    });
  }

  async findAll(category?: FeedbackCategory) {
    const where: any = {};
    if (category) where.category = category;

    return this.prisma.feedback.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: string, status: FeedbackStatus) {
    const item = await this.prisma.feedback.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Feedback entry not found');

    return this.prisma.feedback.update({
      where: { id },
      data: { status },
    });
  }
}
