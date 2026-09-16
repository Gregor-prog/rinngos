import { PrismaService } from '../prisma/prisma.service';
export declare class EnrolAcademyDto {
    fullName: string;
    org: string;
    email: string;
    phone: string;
    trackName: string;
}
export declare class AcademyService {
    private prisma;
    constructor(prisma: PrismaService);
    enrol(dto: EnrolAcademyDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string;
        org: string;
        courseId: string;
    }>;
    findAllCourses(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        trackName: string;
    }[]>;
    findAllEnrolments(): Promise<({
        course: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            trackName: string;
        };
    } & {
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string;
        org: string;
        courseId: string;
    })[]>;
}
