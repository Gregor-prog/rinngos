import { PrismaService } from '../prisma/prisma.service';
export declare class CreateContactDto {
    fullName: string;
    email: string;
    phone?: string;
    message: string;
}
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateContactDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string | null;
        message: string;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string | null;
        message: string;
    }[]>;
}
