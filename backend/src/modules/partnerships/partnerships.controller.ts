import { Controller, Get, Post, Body } from '@nestjs/common';
import { PartnershipsService, CreatePartnershipDto } from './partnerships.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('partnerships')
export class PartnershipsController {
  constructor(private readonly partnershipsService: PartnershipsService) {}

  @Public()
  @Post()
  create(@Body() dto: CreatePartnershipDto) {
    return this.partnershipsService.create(dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get()
  findAll() {
    return this.partnershipsService.findAll();
  }
}
