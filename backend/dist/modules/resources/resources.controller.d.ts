import { ResourcesService, CreateResourceDto } from './resources.service';
export declare class ResourcesController {
    private readonly resourcesService;
    constructor(resourcesService: ResourcesService);
    findAll(search?: string, category?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        title: string;
        description: string;
        fileUrl: string | null;
    }[]>;
    create(dto: CreateResourceDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        title: string;
        description: string;
        fileUrl: string | null;
    }>;
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
