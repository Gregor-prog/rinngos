import { AcademyService, EnrolAcademyDto } from './academy.service';
export declare class AcademyController {
    private readonly academyService;
    constructor(academyService: AcademyService);
    findAllCourses(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        trackName: string;
    }[]>;
    enrol(dto: EnrolAcademyDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        phone: string;
        org: string;
        courseId: string;
    }>;
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
