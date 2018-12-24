import { Entity } from '@loopback/repository';
export declare class Agents extends Entity {
    id: string;
    firstName?: string;
    lastName?: string;
    UID?: string;
    created: Date;
    email: string;
    active: boolean;
    constructor(data?: Partial<Agents>);
}
