import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EnrolAcademyDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  org: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  trackName: string;
}

@Injectable()
export class AcademyService {
  constructor(private prisma: PrismaService) {}

  async enrol(dto: EnrolAcademyDto) {
    let course = await this.prisma.course.findFirst({
      where: { trackName: dto.trackName },
    });

    if (!course) {
      course = await this.prisma.course.create({
        data: {
          trackName: dto.trackName,
          description: `Sweep Academy track: ${dto.trackName}`,
        },
      });
    }

    return this.prisma.courseEnrolment.create({
      data: {
        courseId: course.id,
        fullName: dto.fullName,
        org: dto.org,
        email: dto.email,
        phone: dto.phone,
      },
    });
  }

  async findAllCourses() {
    return this.prisma.course.findMany();
  }

  async findAllEnrolments() {
    return this.prisma.courseEnrolment.findMany({
      include: { course: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
