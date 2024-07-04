import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
const mockmovies = [
  { title: 'Movie 1', description: 'Description for Movie 1' },
  { title: 'Movie 2', description: 'Description for Movie 2' },
  { title: 'Movie 3', description: 'Description for Movie 3' },
  { title: 'Movie 4', description: 'Description for Movie 4' },
  { title: 'Movie 5', description: 'Description for Movie 5' },
  { title: 'Movie 6', description: 'Description for Movie 6' },
];

function App() {
  const [title, setTitle] = useState('');
  const [movies,setMovies] = useState<any[]|[]>([])

  const filteredMovies = mockmovies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );

  const getSearchMovies =async()=>{
    try {
      const movies =await  axios.get(`http://localhost:5050/api/v1/mockflix/${title}`)
      setMovies(movies.data.hits)
      console.log(movies.data.hits)
      
    } catch (error) {
      console.log(error)
    }


  }

  useEffect(()=>{
    // if(title.length>=3){
      getSearchMovies()
    // }else{
    //   setMovies()
    // }
  },[title])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <input
          type="text"
          placeholder="Enter movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </header>
      {movies && movies.length > 0 ? (
         <div className="movie-grid">
         {movies.map((movie, index) => (
           <div className="movie-card" key={index}>
             <h2>{movie._source.title}</h2>
             <div>
               <img width={'200px'} src={`https://image.tmdb.org/t/p/w500${movie._source.poster_path}`} alt='' />
             </div>
             <p>{movie._source.overview}</p>
           </div>
         ))}
       </div>

      ):(
        <h1>¡Busca peliculas por titulo!</h1>
        
        
      )}
     
    </div>
  );
}

export default App;
