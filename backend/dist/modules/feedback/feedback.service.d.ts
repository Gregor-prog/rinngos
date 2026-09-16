import { PrismaService } from '../prisma/prisma.service';
import { FeedbackCategory, FeedbackStatus } from '@prisma/client';
export declare class CreateFeedbackDto {
    name?: string;
    contact?: string;
    category: FeedbackCategory;
    message: string;
}
export declare class FeedbackService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateFeedbackDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        status: import(".prisma/client").$Enums.FeedbackStatus;
        category: import(".prisma/client").$Enums.FeedbackCategory;
        contact: string | null;
        message: string;
    }>;
    findAll(category?: FeedbackCategory): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        status: import(".prisma/client").$Enums.FeedbackStatus;
        category: import(".prisma/client").$Enums.FeedbackCategory;
        contact: string | null;
        message: string;
    }[]>;
    updateStatus(id: string, status: FeedbackStatus): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        status: import(".prisma/client").$Enums.FeedbackStatus;
        category: import(".prisma/client").$Enums.FeedbackCategory;
        contact: string | null;
        message: string;
    }>;
}
