import { DefaultCrudRepository } from '@loopback/repository';
import { Customers } from '../models';
import { FirestoreDataSource } from '../datasources';
export declare class CustomersRepository extends DefaultCrudRepository<Customers, typeof Customers.prototype.id> {
    constructor(dataSource: FirestoreDataSource);
}
