import {Campaigns} from './campaigns.model';
import {model, property, Entity} from '@loopback/repository';

@model()
export class Customers extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  agent?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'boolean',
  })
  active?: boolean;

  @property({
    type: 'array',
    itemType: 'object',
  })
  campaigns?: Campaigns[];

  constructor(data?: Partial<Customers>) {
    super(data);
  }
}
