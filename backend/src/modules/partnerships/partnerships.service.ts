import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePartnershipDto {
  @IsString()
  @IsNotEmpty()
  orgName: string;

  @IsString()
  @IsNotEmpty()
  contactName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  partnerType: string;

  @IsString()
  @IsOptional()
  details?: string;
}

@Injectable()
export class PartnershipsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePartnershipDto) {
    return this.prisma.partnershipEnquiry.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.partnershipEnquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
