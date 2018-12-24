import { Entity } from '@loopback/repository';
export declare class Agents extends Entity {
    id: string;
    name?: string;
    constructor(data?: Partial<Agents>);
}
