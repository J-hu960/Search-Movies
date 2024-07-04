import { AppService } from './app.service';
import { SearchHitsMetadata } from '@elastic/elasticsearch/lib/api/types';
interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    indexMovies(body: Movie[]): Promise<void>;
    getMovies(title: string): Promise<SearchHitsMetadata>;
}
export {};
