import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CoworkingService, CreateCoworkingBookingDto } from './coworking.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role, BookingStatus } from '@prisma/client';

@Controller('coworking')
export class CoworkingController {
  constructor(private readonly coworkingService: CoworkingService) {}

  @Public()
  @Post('book')
  book(@Body() dto: CreateCoworkingBookingDto) {
    return this.coworkingService.book(dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get('bookings')
  findAll() {
    return this.coworkingService.findAll();
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Patch('bookings/:id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: BookingStatus) {
    return this.coworkingService.updateStatus(id, status);
  }
}
