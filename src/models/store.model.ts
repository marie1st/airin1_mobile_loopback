import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Store extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  tax_id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'string',
    required: true,
  })
  subdistrict: string;

  @property({
    type: 'string',
    required: true,
  })
  province: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  postcode: string;

  @property({
    type: 'string',
    required: true,
  })
  id_line: string;

  @property({
    type: 'string',
    required: true,
  })
  facebook: string;

  @property({
    type: 'string',
    required: true,
  })
  company_file: string;

  @property({
    type: 'string',
    required: true,
  })
  pic_store: string;

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

  constructor(data?: Partial<Store>) {
    super(data);
  }
}

export interface StoreRelations {
  // describe navigational properties here
}

export type StoreWithRelations = Store & StoreRelations;
