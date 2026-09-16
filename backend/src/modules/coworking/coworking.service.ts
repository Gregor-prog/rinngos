import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BookingStatus } from '@prisma/client';
import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCoworkingBookingDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsDateString()
  date: string;
}

@Injectable()
export class CoworkingService {
  constructor(private prisma: PrismaService) {}

  async book(dto: CreateCoworkingBookingDto) {
    return this.prisma.coworkingBooking.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        date: new Date(dto.date),
      },
    });
  }

  async findAll() {
    return this.prisma.coworkingBooking.findMany({
      orderBy: { date: 'asc' },
    });
  }

  async updateStatus(id: string, status: BookingStatus) {
    const existing = await this.prisma.coworkingBooking.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Booking not found');

    return this.prisma.coworkingBooking.update({
      where: { id },
      data: { status },
    });
  }
}
