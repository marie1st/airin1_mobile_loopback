import {DefaultCrudRepository} from '@loopback/repository';
import {Store, StoreRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StoreRepository extends DefaultCrudRepository<
  Store,
  typeof Store.prototype.tax_id,
  StoreRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(Store, dataSource);
  }
}
