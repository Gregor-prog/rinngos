import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  date: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  capacity?: number;
}

export class RegisterEventDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;
}

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEventDto) {
    return this.prisma.event.create({
      data: {
        title: dto.title,
        description: dto.description,
        date: new Date(dto.date),
        location: dto.location || 'Online / Zoom',
        capacity: dto.capacity,
      },
    });
  }

  async findAll() {
    return this.prisma.event.findMany({
      orderBy: { date: 'asc' },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: { registrations: true },
    });
    if (!event) throw new NotFoundException('Event not found');
    return event;
  }

  async register(eventId: string, dto: RegisterEventDto) {
    await this.findOne(eventId);

    const existing = await this.prisma.eventRegistration.findUnique({
      where: { eventId_email: { eventId, email: dto.email.toLowerCase() } },
    });

    if (existing) {
      throw new ConflictException('Already registered for this event');
    }

    return this.prisma.eventRegistration.create({
      data: {
        eventId,
        fullName: dto.fullName,
        email: dto.email.toLowerCase(),
      },
    });
  }
}
