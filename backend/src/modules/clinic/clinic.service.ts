import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QueryClinicDto {
  @IsString()
  @IsNotEmpty()
  query: string;
}

export class CreateClinicKBDto {
  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsString()
  @IsOptional()
  category?: string;
}

@Injectable()
export class ClinicService {
  constructor(private prisma: PrismaService) {}

  async query(q: string) {
    const s = q.toLowerCase();
    const allKb = await this.prisma.clinicKB.findMany();

    if (allKb.length === 0) {
      // Fallback default response if database has not been seeded
      return {
        query: q,
        answer:
          'I can help with NGO registration, governance, funding readiness, regulatory policies, self-regulation, safeguarding, Community Development Plans, extractive justice, training, webinars and RINNGOS membership. Please describe the issue in one or two sentences.',
      };
    }

    let best = null;
    let score = 0;

    allKb.forEach((item) => {
      let n = item.keywords.filter((k) => s.includes(k.toLowerCase())).length;
      if (n > score) {
        score = n;
        best = item;
      }
    });

    return {
      query: q,
      answer: best
        ? best.answer
        : 'I can help with NGO registration, governance, funding readiness, regulatory policies, self-regulation, safeguarding, Community Development Plans, extractive justice, training, webinars and RINNGOS membership. Please describe the issue in one or two sentences and include the type of organisation or community involved.',
    };
  }

  async findAllKB() {
    return this.prisma.clinicKB.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async createKB(dto: CreateClinicKBDto) {
    return this.prisma.clinicKB.create({
      data: dto,
    });
  }

  async updateKB(id: string, dto: Partial<CreateClinicKBDto>) {
    const existing = await this.prisma.clinicKB.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('KB Entry not found');

    return this.prisma.clinicKB.update({
      where: { id },
      data: dto,
    });
  }

  async deleteKB(id: string) {
    const existing = await this.prisma.clinicKB.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('KB Entry not found');

    return this.prisma.clinicKB.delete({ where: { id } });
  }
}
