import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class OrderProject extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  order_project_id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrderProject>) {
    super(data);
  }
}

export interface OrderProjectRelations {
  // describe navigational properties here
}

export type OrderProjectWithRelations = OrderProject & OrderProjectRelations;
