import { PrismaService } from '../prisma/prisma.service';
export declare class CreatePartnershipDto {
    orgName: string;
    contactName: string;
    email: string;
    partnerType: string;
    details?: string;
}
export declare class PartnershipsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePartnershipDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        orgName: string;
        contactName: string;
        partnerType: string;
        details: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        orgName: string;
        contactName: string;
        partnerType: string;
        details: string | null;
    }[]>;
}
