import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class OrderProduct extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  order_id: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  type_inverter: string;

  @property({
    type: 'number',
    required: true,
  })
  btu: number;

  @property({
    type: 'string',
    required: true,
  })
  type_cdu: string;

  @property({
    type: 'string',
    required: true,
  })
  type_fcu: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  order_by: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    required: true,
  })
  product_id: string;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrderProduct>) {
    super(data);
  }
}

export interface OrderProductRelations {
  // describe navigational properties here
}

export type OrderProductWithRelations = OrderProduct & OrderProductRelations;
