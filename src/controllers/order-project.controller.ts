import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {OrderProject} from '../models';
import {OrderProjectRepository} from '../repositories';

export class OrderProjectController {
  constructor(
    @repository(OrderProjectRepository)
    public orderProjectRepository : OrderProjectRepository,
  ) {}

  @post('/order-projects', {
    responses: {
      '200': {
        description: 'OrderProject model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderProject)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProject, {
            title: 'NewOrderProject',
            
          }),
        },
      },
    })
    orderProject: OrderProject,
  ): Promise<OrderProject> {
    return this.orderProjectRepository.create(orderProject);
  }

  @get('/order-projects/count', {
    responses: {
      '200': {
        description: 'OrderProject model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrderProject) where?: Where<OrderProject>,
  ): Promise<Count> {
    return this.orderProjectRepository.count(where);
  }

  @get('/order-projects', {
    responses: {
      '200': {
        description: 'Array of OrderProject model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrderProject, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrderProject) filter?: Filter<OrderProject>,
  ): Promise<OrderProject[]> {
    return this.orderProjectRepository.find(filter);
  }

  @patch('/order-projects', {
    responses: {
      '200': {
        description: 'OrderProject PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProject, {partial: true}),
        },
      },
    })
    orderProject: OrderProject,
    @param.where(OrderProject) where?: Where<OrderProject>,
  ): Promise<Count> {
    return this.orderProjectRepository.updateAll(orderProject, where);
  }

  @get('/order-projects/{id}', {
    responses: {
      '200': {
        description: 'OrderProject model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrderProject, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OrderProject, {exclude: 'where'}) filter?: FilterExcludingWhere<OrderProject>
  ): Promise<OrderProject> {
    return this.orderProjectRepository.findById(id, filter);
  }

  @patch('/order-projects/{id}', {
    responses: {
      '204': {
        description: 'OrderProject PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProject, {partial: true}),
        },
      },
    })
    orderProject: OrderProject,
  ): Promise<void> {
    await this.orderProjectRepository.updateById(id, orderProject);
  }

  @put('/order-projects/{id}', {
    responses: {
      '204': {
        description: 'OrderProject PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() orderProject: OrderProject,
  ): Promise<void> {
    await this.orderProjectRepository.replaceById(id, orderProject);
  }

  @del('/order-projects/{id}', {
    responses: {
      '204': {
        description: 'OrderProject DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.orderProjectRepository.deleteById(id);
  }
}
