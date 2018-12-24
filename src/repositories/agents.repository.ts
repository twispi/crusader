import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Agents} from '../models';
import {FirestoreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AgentsRepository extends DefaultCrudRepository<
  Agents,
  typeof Agents.prototype.id
> {
  constructor(
    @inject('datasources.firestore') dataSource: FirestoreDataSource,
  ) {
    super(Agents, dataSource);
  }
}
