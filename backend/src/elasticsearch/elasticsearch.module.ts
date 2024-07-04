import { Module } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Module({
  providers: [
    {
      provide: 'ELASTIC_CLIENT',
      useFactory: () => {
        return new Client({
          node: 'https://c4a69888179a415da644a0a0acb8e41b.us-central1.gcp.cloud.es.io:443', 
          auth:{
            apiKey:'Z0JyM2VKQUJMN2JxdHFsRzI2a0E6QzZ4X0RESWZSSkc1X3VvbkZtSldVdw==',
          }
        });
      },
    },
  ],
  exports: ['ELASTIC_CLIENT'],
})
export default class ElasticModule {}
