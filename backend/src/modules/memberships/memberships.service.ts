import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MembershipStatus } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  @IsNotEmpty()
  orgName: string;

  @IsString()
  @IsOptional()
  acronym?: string;

  @IsString()
  @IsNotEmpty()
  contactName: string;

  @IsString()
  @IsNotEmpty()
  contactRole: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  cac: string;

  @IsString()
  @IsNotEmpty()
  lga: string;

  @IsString()
  @IsNotEmpty()
  thematic: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}

export class UpdateMembershipStatusDto {
  @IsNotEmpty()
  status: MembershipStatus;
}

@Injectable()
export class MembershipsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMembershipDto) {
    return this.prisma.membership.create({
      data: dto,
    });
  }

  async findAll(params: { lga?: string; status?: MembershipStatus; search?: string }) {
    const where: any = {};
    if (params.lga) where.lga = params.lga;
    if (params.status) where.status = params.status;
    if (params.search) {
      where.OR = [
        { orgName: { contains: params.search, mode: 'insensitive' } },
        { acronym: { contains: params.search, mode: 'insensitive' } },
        { email: { contains: params.search, mode: 'insensitive' } },
      ];
    }

    return this.prisma.membership.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.membership.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Membership record not found');
    return item;
  }

  async updateStatus(id: string, status: MembershipStatus) {
    await this.findOne(id);
    return this.prisma.membership.update({
      where: { id },
      data: {
        status,
        revalidatedAt: status === MembershipStatus.REVALIDATED ? new Date() : undefined,
      },
    });
  }

  async lookup(query: string) {
    return this.prisma.membership.findMany({
      where: {
        OR: [
          { orgName: { contains: query, mode: 'insensitive' } },
          { cac: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }
}
