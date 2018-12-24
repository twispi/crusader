import { DefaultCrudRepository } from '@loopback/repository';
import { Agents } from '../models';
import { FirestoreDataSource } from '../datasources';
export declare class AgentsRepository extends DefaultCrudRepository<Agents, typeof Agents.prototype.id> {
    constructor(dataSource: FirestoreDataSource);
}
