import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

import styled from 'styled-components';
import './App.css';

const FilmInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid lightgrey;
  font-size: 24px;
  width: 100%;
`;

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          'https://api.themoviedb.org/3/search/movie?&api_key=' +
            API_KEY +
            (input ? '&query=' + input : '')
        );
        let data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [input]);

  return (
    <div>
      <Header />
      <FilmInput
        type="text"
        name="input"
        id=""
        placeholder="Search for a movie..."
        onChange={onChange}
      />
      <div className="container">
        {movies === undefined ? (
          <h2>Please search for a film...</h2>
        ) : (
          movies.map((movie, id) => (
            <MovieCard
              key={id}
              title={movie.original_title}
              imgExtention={movie.poster_path ? movie.poster_path : ''}
              overview={movie.overview}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
