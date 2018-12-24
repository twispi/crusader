import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Customers} from '../models';
import {FirestoreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomersRepository extends DefaultCrudRepository<
  Customers,
  typeof Customers.prototype.id
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(Customers, dataSource);
  }
}
