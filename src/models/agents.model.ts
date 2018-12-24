import {Entity, model, property} from '@loopback/repository';

@model()
export class Agents extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({type: 'string'})
  UID?: string;

  @property({type: Date})
  created: Date;

  @property({type: 'string'})
  email: string;

  @property({type: 'boolean'})
  active: boolean;

  constructor(data?: Partial<Agents>) {
    super(data);
  }
}
