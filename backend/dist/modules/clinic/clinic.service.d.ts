import { PrismaService } from '../prisma/prisma.service';
export declare class QueryClinicDto {
    query: string;
}
export declare class CreateClinicKBDto {
    keywords: string[];
    answer: string;
    category?: string;
}
export declare class ClinicService {
    private prisma;
    constructor(prisma: PrismaService);
    query(q: string): Promise<{
        query: string;
        answer: any;
    }>;
    findAllKB(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        keywords: string[];
        answer: string;
        category: string;
    }[]>;
    createKB(dto: CreateClinicKBDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        keywords: string[];
        answer: string;
        category: string;
    }>;
    updateKB(id: string, dto: Partial<CreateClinicKBDto>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        keywords: string[];
        answer: string;
        category: string;
    }>;
    deleteKB(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        keywords: string[];
        answer: string;
        category: string;
    }>;
}
