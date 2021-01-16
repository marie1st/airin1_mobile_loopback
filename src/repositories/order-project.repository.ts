import {DefaultCrudRepository} from '@loopback/repository';
import {OrderProject, OrderProjectRelations} from '../models';
import {AirinoneMobileDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderProjectRepository extends DefaultCrudRepository<
  OrderProject,
  typeof OrderProject.prototype.order_project_id,
  OrderProjectRelations
> {
  constructor(
    @inject('datasources.airinone_mobile') dataSource: AirinoneMobileDataSource,
  ) {
    super(OrderProject, dataSource);
  }
}
