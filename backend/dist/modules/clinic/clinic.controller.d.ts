import { ClinicService, QueryClinicDto, CreateClinicKBDto } from './clinic.service';
export declare class ClinicController {
    private readonly clinicService;
    constructor(clinicService: ClinicService);
    query(dto: QueryClinicDto): Promise<{
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
