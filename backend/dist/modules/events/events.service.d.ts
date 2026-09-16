import { PrismaService } from '../prisma/prisma.service';
export declare class CreateEventDto {
    title: string;
    description: string;
    date: string;
    location?: string;
    capacity?: number;
}
export declare class RegisterEventDto {
    fullName: string;
    email: string;
}
export declare class EventsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateEventDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        date: Date;
        location: string;
        capacity: number | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        date: Date;
        location: string;
        capacity: number | null;
    }[]>;
    findOne(id: string): Promise<{
        registrations: {
            id: string;
            email: string;
            fullName: string;
            createdAt: Date;
            eventId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        date: Date;
        location: string;
        capacity: number | null;
    }>;
    register(eventId: string, dto: RegisterEventDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        eventId: string;
    }>;
}
