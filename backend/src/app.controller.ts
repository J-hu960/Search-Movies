import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchHitsMetadata } from '@elastic/elasticsearch/lib/api/types';

interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async indexMovies(@Body() body:Movie[] ):Promise<void>{
           this.appService.indexMovies(body)
  }

  @Get(':title')
  async getMovies(@Param('title') title:string):Promise<SearchHitsMetadata>{
    return this.appService.getFilteredMovies(title)
  }


  
}
