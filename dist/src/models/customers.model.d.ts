import { Campaigns } from './campaigns.model';
import { Entity } from '@loopback/repository';
export declare class Customers extends Entity {
    id?: string;
    agent?: string;
    created?: string;
    name?: string;
    active?: boolean;
    campaigns?: Campaigns[];
    constructor(data?: Partial<Customers>);
}
