import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PromotionalProduct extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  product_id: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PromotionalProduct>) {
    super(data);
  }
}

export interface PromotionalProductRelations {
  // describe navigational properties here
}

export type PromotionalProductWithRelations = PromotionalProduct & PromotionalProductRelations;
