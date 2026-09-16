import { EventsService, CreateEventDto, RegisterEventDto } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
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
    register(id: string, dto: RegisterEventDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        eventId: string;
    }>;
}
