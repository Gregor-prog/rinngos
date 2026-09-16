import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { MembershipsService, CreateMembershipDto, UpdateMembershipStatusDto } from './memberships.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role, MembershipStatus } from '@prisma/client';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly membershipsService: MembershipsService) {}

  @Public()
  @Post()
  create(@Body() dto: CreateMembershipDto) {
    return this.membershipsService.create(dto);
  }

  @Public()
  @Get('lookup')
  lookup(@Query('q') query: string) {
    return this.membershipsService.lookup(query || '');
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get()
  findAll(
    @Query('lga') lga?: string,
    @Query('status') status?: MembershipStatus,
    @Query('search') search?: string,
  ) {
    return this.membershipsService.findAll({ lga, status, search });
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipsService.findOne(id);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateMembershipStatusDto) {
    return this.membershipsService.updateStatus(id, dto.status);
  }
}
