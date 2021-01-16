import {DefaultCrudRepository} from '@loopback/repository';
import {OrderProduct, OrderProductRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderProductRepository extends DefaultCrudRepository<
  OrderProduct,
  typeof OrderProduct.prototype.order_id,
  OrderProductRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(OrderProduct, dataSource);
  }
}
