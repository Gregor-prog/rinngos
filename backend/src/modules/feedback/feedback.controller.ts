import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { FeedbackService, CreateFeedbackDto } from './feedback.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role, FeedbackCategory, FeedbackStatus } from '@prisma/client';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Public()
  @Post()
  create(@Body() dto: CreateFeedbackDto) {
    return this.feedbackService.create(dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get()
  findAll(@Query('category') category?: FeedbackCategory) {
    return this.feedbackService.findAll(category);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: FeedbackStatus) {
    return this.feedbackService.updateStatus(id, status);
  }
}
