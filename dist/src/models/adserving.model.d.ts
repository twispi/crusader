import { Entity } from '@loopback/repository';
export declare class Adserving extends Entity {
    id?: string;
    avgViewsBeforeClick?: number;
    clicks?: number;
    conversions?: number;
    ctr?: number;
    date?: Date;
    impressions?: number;
    interactions?: number;
    reach?: number;
    campaign_id?: number;
    constructor(data?: Partial<Adserving>);
}
