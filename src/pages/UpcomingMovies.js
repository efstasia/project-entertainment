import React, { useState, useEffect } from 'react';
import { API_KEY } from '../utils/urls';

export const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, [MOVIE_URL]);

  return (
    <div className='movie-list-container'>
      <div className='movie-list'>
        {movies.map(movie => (
          <div key={movie.id} className='movie-card'>
            <div>
              <div className='movie-details'>
                <img
                  className='movie-poster'
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                      : ''
                  }
                  alt={movie.title}
                />

                <h3 className='movie-title'>
                  {movie.title}
                  <span className='movie-rating'>
                    {movie.vote_average} / 10
                  </span>
                </h3>
                {movie.release_date && (
                  <h2 className='release-date'>
                    release date {movie.release_date}
                  </h2>
                )}
                <p className='movie-overview'>{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
