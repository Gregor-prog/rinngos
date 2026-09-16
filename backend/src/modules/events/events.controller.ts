import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventsService, CreateEventDto, RegisterEventDto } from './events.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Public()
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Post()
  create(@Body() dto: CreateEventDto) {
    return this.eventsService.create(dto);
  }

  @Public()
  @Post(':id/register')
  register(@Param('id') id: string, @Body() dto: RegisterEventDto) {
    return this.eventsService.register(id, dto);
  }
}
