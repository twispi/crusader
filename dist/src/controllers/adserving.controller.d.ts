import { Count, Filter, Where } from '@loopback/repository';
import { Adserving } from '../models';
import { AdservingRepository } from '../repositories';
export declare class AdservingController {
    adservingRepository: AdservingRepository;
    constructor(adservingRepository: AdservingRepository);
    create(adserving: Adserving): Promise<Adserving>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Adserving[]>;
    updateAll(adserving: Adserving, where?: Where): Promise<Count>;
    findById(id: string): Promise<Adserving>;
    updateById(id: string, adserving: Adserving): Promise<void>;
    replaceById(id: string, adserving: Adserving): Promise<void>;
    deleteById(id: string): Promise<void>;
}
