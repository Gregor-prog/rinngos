import { CoworkingService, CreateCoworkingBookingDto } from './coworking.service';
import { BookingStatus } from '@prisma/client';
export declare class CoworkingController {
    private readonly coworkingService;
    constructor(coworkingService: CoworkingService);
    book(dto: CreateCoworkingBookingDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BookingStatus;
        date: Date;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BookingStatus;
        date: Date;
    }[]>;
    updateStatus(id: string, status: BookingStatus): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BookingStatus;
        date: Date;
    }>;
}
