import { Controller, Get, Post, Body } from '@nestjs/common';
import { AcademyService, EnrolAcademyDto } from './academy.service';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Public()
  @Get('courses')
  findAllCourses() {
    return this.academyService.findAllCourses();
  }

  @Public()
  @Post('enrol')
  enrol(@Body() dto: EnrolAcademyDto) {
    return this.academyService.enrol(dto);
  }

  @Roles(Role.SUPER_ADMIN, Role.SECRETARIAT_ADMIN)
  @Get('enrolments')
  findAllEnrolments() {
    return this.academyService.findAllEnrolments();
  }
}
