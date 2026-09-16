import { PrismaService } from '../prisma/prisma.service';
import { MembershipStatus } from '@prisma/client';
export declare class CreateMembershipDto {
    orgName: string;
    acronym?: string;
    contactName: string;
    contactRole: string;
    email: string;
    phone: string;
    cac: string;
    lga: string;
    thematic: string;
    address: string;
}
export declare class UpdateMembershipStatusDto {
    status: MembershipStatus;
}
export declare class MembershipsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMembershipDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        orgName: string;
        acronym: string | null;
        contactName: string;
        contactRole: string;
        phone: string;
        cac: string;
        lga: string;
        thematic: string;
        address: string;
        status: import(".prisma/client").$Enums.MembershipStatus;
        revalidatedAt: Date | null;
    }>;
    findAll(params: {
        lga?: string;
        status?: MembershipStatus;
        search?: string;
    }): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        orgName: string;
        acronym: string | null;
        contactName: string;
        contactRole: string;
        phone: string;
        cac: string;
        lga: string;
        thematic: string;
        address: string;
        status: import(".prisma/client").$Enums.MembershipStatus;
        revalidatedAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        orgName: string;
        acronym: string | null;
        contactName: string;
        contactRole: string;
        phone: string;
        cac: string;
        lga: string;
        thematic: string;
        address: string;
        status: import(".prisma/client").$Enums.MembershipStatus;
        revalidatedAt: Date | null;
    }>;
    updateStatus(id: string, status: MembershipStatus): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        orgName: string;
        acronym: string | null;
        contactName: string;
        contactRole: string;
        phone: string;
        cac: string;
        lga: string;
        thematic: string;
        address: string;
        status: import(".prisma/client").$Enums.MembershipStatus;
        revalidatedAt: Date | null;
    }>;
    lookup(query: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        orgName: string;
        acronym: string | null;
        contactName: string;
        contactRole: string;
        phone: string;
        cac: string;
        lga: string;
        thematic: string;
        address: string;
        status: import(".prisma/client").$Enums.MembershipStatus;
        revalidatedAt: Date | null;
    }[]>;
}
