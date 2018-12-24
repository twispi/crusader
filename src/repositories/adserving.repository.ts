import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Adserving} from '../models';
import {FirestoreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdservingRepository extends DefaultCrudRepository<
  Adserving,
  typeof Adserving.prototype.id
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(Adserving, dataSource);
  }
}
