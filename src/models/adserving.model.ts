import {Entity, model, property} from '@loopback/repository';

@model()
export class Adserving extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  avgViewsBeforeClick?: number;

  @property({
    type: 'number',
  })
  clicks?: number;

  @property({
    type: 'number',
  })
  conversions?: number;

  @property({
    type: 'number',
  })
  ctr?: number;

  @property({
    type: Date,
  })
  date?: Date;

  @property({
    type: 'number',
  })
  impressions?: number;

  @property({
    type: 'number',
  })
  interactions?: number;

  @property({
    type: 'number',
  })
  reach?: number;

  @property({
    type: 'number',
  })
  campaign_id?: number;

  constructor(data?: Partial<Adserving>) {
    super(data);
  }
}
