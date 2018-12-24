import { DefaultCrudRepository } from '@loopback/repository';
import { Adserving } from '../models';
import { FirestoreDataSource } from '../datasources';
export declare class AdservingRepository extends DefaultCrudRepository<Adserving, typeof Adserving.prototype.id> {
    constructor(dataSource: FirestoreDataSource);
}
