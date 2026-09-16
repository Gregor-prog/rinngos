import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ClinicService, QueryClinicDto, CreateClinicKBDto } from './clinic.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Public()
  @Post('query')
  query(@Body() dto: QueryClinicDto) {
    return this.clinicService.query(dto.query);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get('kb')
  findAllKB() {
    return this.clinicService.findAllKB();
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Post('kb')
  createKB(@Body() dto: CreateClinicKBDto) {
    return this.clinicService.createKB(dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Put('kb/:id')
  updateKB(@Param('id') id: string, @Body() dto: Partial<CreateClinicKBDto>) {
    return this.clinicService.updateKB(id, dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Delete('kb/:id')
  deleteKB(@Param('id') id: string) {
    return this.clinicService.deleteKB(id);
  }
}
