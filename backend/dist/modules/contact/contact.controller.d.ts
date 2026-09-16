import { ContactService, CreateContactDto } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
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
