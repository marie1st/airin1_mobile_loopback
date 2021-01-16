import {DefaultCrudRepository} from '@loopback/repository';
import {PromotionalProduct, PromotionalProductRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PromotionalProductRepository extends DefaultCrudRepository<
  PromotionalProduct,
  typeof PromotionalProduct.prototype.id,
  PromotionalProductRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(PromotionalProduct, dataSource);
  }
}
