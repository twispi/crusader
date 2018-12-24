"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AgentsController = class AgentsController {
    constructor(agentsRepository) {
        this.agentsRepository = agentsRepository;
    }
    async create(agents) {
        return await this.agentsRepository.create(agents);
    }
    async count(where) {
        return await this.agentsRepository.count(where);
    }
    async find(filter) {
        return await this.agentsRepository.find(filter);
    }
    async updateAll(agents, where) {
        return await this.agentsRepository.updateAll(agents, where);
    }
    async findById(id) {
        return await this.agentsRepository.findById(id);
    }
    async updateById(id, agents) {
        await this.agentsRepository.updateById(id, agents);
    }
    async replaceById(id, agents) {
        await this.agentsRepository.replaceById(id, agents);
    }
    async deleteById(id) {
        await this.agentsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/agents', {
        responses: {
            '200': {
                description: 'Agents model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Agents } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Agents]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "create", null);
__decorate([
    rest_1.get('/agents/count', {
        responses: {
            '200': {
                description: 'Agents model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Agents))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "count", null);
__decorate([
    rest_1.get('/agents', {
        responses: {
            '200': {
                description: 'Array of Agents model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Agents } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Agents))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "find", null);
__decorate([
    rest_1.patch('/agents', {
        responses: {
            '200': {
                description: 'Agents PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Agents))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Agents, Object]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/agents/{id}', {
        responses: {
            '200': {
                description: 'Agents model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Agents } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/agents/{id}', {
        responses: {
            '204': {
                description: 'Agents PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Agents]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/agents/{id}', {
        responses: {
            '204': {
                description: 'Agents PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Agents]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/agents/{id}', {
        responses: {
            '204': {
                description: 'Agents DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "deleteById", null);
AgentsController = __decorate([
    __param(0, repository_1.repository(repositories_1.AgentsRepository)),
    __metadata("design:paramtypes", [repositories_1.AgentsRepository])
], AgentsController);
exports.AgentsController = AgentsController;
//# sourceMappingURL=agents.controller.js.map