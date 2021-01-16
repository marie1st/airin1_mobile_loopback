import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.tax_id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(Customer, dataSource);
  }
}
