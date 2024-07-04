import { Client } from '@elastic/elasticsearch';
import { AggregationsAggregate, SearchHitsMetadata, SearchResponseBody } from '@elastic/elasticsearch/lib/api/types';
import { Inject, Injectable } from '@nestjs/common';



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

@Injectable()
export class AppService {
  constructor(
    @Inject('ELASTIC_CLIENT') private elastiClient:Client
  ){}
 async indexMovies(movies:Movie[]){
    movies.forEach(movie=>{
       this.elastiClient.index({
        index:'movies',
        body:movie
      })
    }) }

  async getFilteredMovies(title:string):Promise<SearchHitsMetadata>{
    const query = {index:'movies',q:title}
    const movies:SearchResponseBody<unknown, Record<string, AggregationsAggregate>> = await this.elastiClient.search(query)
    return movies.hits


    

  }

}
