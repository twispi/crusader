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
  name?: string;

  constructor(data?: Partial<Agents>) {
    super(data);
  }
}
