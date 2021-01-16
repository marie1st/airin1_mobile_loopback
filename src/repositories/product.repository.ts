import {DefaultCrudRepository} from '@loopback/repository';
import {Product, ProductRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.product_id,
  ProductRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(Product, dataSource);
  }
}
