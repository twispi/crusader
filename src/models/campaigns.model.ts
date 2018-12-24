import {Model, model, property} from '@loopback/repository';

@model()
export class Campaigns extends Model {
  @property({
    type: 'number',
    id: true,
  })
  eyereturnId?: number;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<Campaigns>) {
    super(data);
  }
}
