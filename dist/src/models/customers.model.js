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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Customers = class Customers extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Customers.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Customers.prototype, "agent", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", String)
], Customers.prototype, "created", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Customers.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], Customers.prototype, "active", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'object',
    }),
    __metadata("design:type", Array)
], Customers.prototype, "campaigns", void 0);
Customers = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Customers);
exports.Customers = Customers;
//# sourceMappingURL=customers.model.js.map