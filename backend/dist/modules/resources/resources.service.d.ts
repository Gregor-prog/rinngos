import { PrismaService } from '../prisma/prisma.service';
export declare class CreateResourceDto {
    title: string;
    category: string;
    description: string;
    fileUrl?: string;
}
export declare class ResourcesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateResourceDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        title: string;
        description: string;
        fileUrl: string | null;
    }>;
    findAll(search?: string, category?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        title: string;
        description: string;
        fileUrl: string | null;
    }[]>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        title: string;
        description: string;
        fileUrl: string | null;
    }>;
}
