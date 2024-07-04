"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@elastic/elasticsearch");
let ElasticModule = class ElasticModule {
};
ElasticModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'ELASTIC_CLIENT',
                useFactory: () => {
                    return new elasticsearch_1.Client({
                        node: 'https://c4a69888179a415da644a0a0acb8e41b.us-central1.gcp.cloud.es.io:443',
                        auth: {
                            apiKey: 'Z0JyM2VKQUJMN2JxdHFsRzI2a0E6QzZ4X0RESWZSSkc1X3VvbkZtSldVdw==',
                        }
                    });
                },
            },
        ],
        exports: ['ELASTIC_CLIENT'],
    })
], ElasticModule);
exports.default = ElasticModule;
//# sourceMappingURL=elasticsearch.module.js.map