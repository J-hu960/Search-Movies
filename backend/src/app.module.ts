import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import  ElasticModule from './elasticsearch/elasticsearch.module';


@Module({
  imports:[ElasticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
