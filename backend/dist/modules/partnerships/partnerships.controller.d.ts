import { PartnershipsService, CreatePartnershipDto } from './partnerships.service';
export declare class PartnershipsController {
    private readonly partnershipsService;
    constructor(partnershipsService: PartnershipsService);
    create(dto: CreatePartnershipDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        orgName: string;
        contactName: string;
        partnerType: string;
        details: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        orgName: string;
        contactName: string;
        partnerType: string;
        details: string | null;
    }[]>;
}
