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
import {PromotionalProduct} from '../models';
import {PromotionalProductRepository} from '../repositories';

export class PromotionalProductController {
  constructor(
    @repository(PromotionalProductRepository)
    public promotionalProductRepository : PromotionalProductRepository,
  ) {}

  @post('/promotional-products', {
    responses: {
      '200': {
        description: 'PromotionalProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(PromotionalProduct)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProduct, {
            title: 'NewPromotionalProduct',
            
          }),
        },
      },
    })
    promotionalProduct: PromotionalProduct,
  ): Promise<PromotionalProduct> {
    return this.promotionalProductRepository.create(promotionalProduct);
  }

  @get('/promotional-products/count', {
    responses: {
      '200': {
        description: 'PromotionalProduct model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PromotionalProduct) where?: Where<PromotionalProduct>,
  ): Promise<Count> {
    return this.promotionalProductRepository.count(where);
  }

  @get('/promotional-products', {
    responses: {
      '200': {
        description: 'Array of PromotionalProduct model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PromotionalProduct, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PromotionalProduct) filter?: Filter<PromotionalProduct>,
  ): Promise<PromotionalProduct[]> {
    return this.promotionalProductRepository.find(filter);
  }

  @patch('/promotional-products', {
    responses: {
      '200': {
        description: 'PromotionalProduct PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProduct, {partial: true}),
        },
      },
    })
    promotionalProduct: PromotionalProduct,
    @param.where(PromotionalProduct) where?: Where<PromotionalProduct>,
  ): Promise<Count> {
    return this.promotionalProductRepository.updateAll(promotionalProduct, where);
  }

  @get('/promotional-products/{id}', {
    responses: {
      '200': {
        description: 'PromotionalProduct model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PromotionalProduct, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PromotionalProduct, {exclude: 'where'}) filter?: FilterExcludingWhere<PromotionalProduct>
  ): Promise<PromotionalProduct> {
    return this.promotionalProductRepository.findById(id, filter);
  }

  @patch('/promotional-products/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProduct PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProduct, {partial: true}),
        },
      },
    })
    promotionalProduct: PromotionalProduct,
  ): Promise<void> {
    await this.promotionalProductRepository.updateById(id, promotionalProduct);
  }

  @put('/promotional-products/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProduct PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promotionalProduct: PromotionalProduct,
  ): Promise<void> {
    await this.promotionalProductRepository.replaceById(id, promotionalProduct);
  }

  @del('/promotional-products/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProduct DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promotionalProductRepository.deleteById(id);
  }
}
