import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  fileUrl?: string;
}

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateResourceDto) {
    return this.prisma.resource.create({
      data: dto,
    });
  }

  async findAll(search?: string, category?: string) {
    const where: any = {};
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    return this.prisma.resource.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: string) {
    const existing = await this.prisma.resource.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Resource not found');

    return this.prisma.resource.delete({ where: { id } });
  }
}
