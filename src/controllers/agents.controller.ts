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
import {Agents} from '../models';
import {AgentsRepository} from '../repositories';

export class AgentsController {
  constructor(
    @repository(AgentsRepository)
    public agentsRepository : AgentsRepository,
  ) {}

  @post('/agents', {
    responses: {
      '200': {
        description: 'Agents model instance',
        content: {'application/json': {schema: {'x-ts-type': Agents}}},
      },
    },
  })
  async create(@requestBody() agents: Agents): Promise<Agents> {
    return await this.agentsRepository.create(agents);
  }

  @get('/agents/count', {
    responses: {
      '200': {
        description: 'Agents model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Agents)) where?: Where,
  ): Promise<Count> {
    return await this.agentsRepository.count(where);
  }

  @get('/agents', {
    responses: {
      '200': {
        description: 'Array of Agents model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Agents}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Agents)) filter?: Filter,
  ): Promise<Agents[]> {
    return await this.agentsRepository.find(filter);
  }

  @patch('/agents', {
    responses: {
      '200': {
        description: 'Agents PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() agents: Agents,
    @param.query.object('where', getWhereSchemaFor(Agents)) where?: Where,
  ): Promise<Count> {
    return await this.agentsRepository.updateAll(agents, where);
  }

  @get('/agents/{id}', {
    responses: {
      '200': {
        description: 'Agents model instance',
        content: {'application/json': {schema: {'x-ts-type': Agents}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Agents> {
    return await this.agentsRepository.findById(id);
  }

  @patch('/agents/{id}', {
    responses: {
      '204': {
        description: 'Agents PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() agents: Agents,
  ): Promise<void> {
    await this.agentsRepository.updateById(id, agents);
  }

  @put('/agents/{id}', {
    responses: {
      '204': {
        description: 'Agents PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() agents: Agents,
  ): Promise<void> {
    await this.agentsRepository.replaceById(id, agents);
  }

  @del('/agents/{id}', {
    responses: {
      '204': {
        description: 'Agents DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.agentsRepository.deleteById(id);
  }
}
