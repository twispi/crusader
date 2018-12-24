import { Count, Filter, Where } from '@loopback/repository';
import { Agents } from '../models';
import { AgentsRepository } from '../repositories';
export declare class AgentsController {
    agentsRepository: AgentsRepository;
    constructor(agentsRepository: AgentsRepository);
    create(agents: Agents): Promise<Agents>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Agents[]>;
    updateAll(agents: Agents, where?: Where): Promise<Count>;
    findById(id: string): Promise<Agents>;
    updateById(id: string, agents: Agents): Promise<void>;
    replaceById(id: string, agents: Agents): Promise<void>;
    deleteById(id: string): Promise<void>;
}
