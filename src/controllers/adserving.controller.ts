import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Adserving} from '../models';
import {AdservingRepository} from '../repositories';

export class AdservingController {
  constructor(
    @repository(AdservingRepository)
    public adservingRepository : AdservingRepository,
  ) {}

  @post('/adservings', {
    responses: {
      '200': {
        description: 'Adserving model instance',
        content: {'application/json': {schema: {'x-ts-type': Adserving}}},
      },
    },
  })
  async create(@requestBody() adserving: Adserving): Promise<Adserving> {
    return await this.adservingRepository.create(adserving);
  }

  @get('/adservings/count', {
    responses: {
      '200': {
        description: 'Adserving model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Adserving)) where?: Where,
  ): Promise<Count> {
    return await this.adservingRepository.count(where);
  }

  @get('/adservings', {
    responses: {
      '200': {
        description: 'Array of Adserving model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Adserving}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Adserving)) filter?: Filter,
  ): Promise<Adserving[]> {
    return await this.adservingRepository.find(filter);
  }

  @patch('/adservings', {
    responses: {
      '200': {
        description: 'Adserving PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() adserving: Adserving,
    @param.query.object('where', getWhereSchemaFor(Adserving)) where?: Where,
  ): Promise<Count> {
    return await this.adservingRepository.updateAll(adserving, where);
  }

  @get('/adservings/{id}', {
    responses: {
      '200': {
        description: 'Adserving model instance',
        content: {'application/json': {schema: {'x-ts-type': Adserving}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Adserving> {
    return await this.adservingRepository.findById(id);
  }

  @patch('/adservings/{id}', {
    responses: {
      '204': {
        description: 'Adserving PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() adserving: Adserving,
  ): Promise<void> {
    await this.adservingRepository.updateById(id, adserving);
  }

  @put('/adservings/{id}', {
    responses: {
      '204': {
        description: 'Adserving PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() adserving: Adserving,
  ): Promise<void> {
    await this.adservingRepository.replaceById(id, adserving);
  }

  @del('/adservings/{id}', {
    responses: {
      '204': {
        description: 'Adserving DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adservingRepository.deleteById(id);
  }
}
