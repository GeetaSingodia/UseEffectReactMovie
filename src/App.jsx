import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

import './App.css'

export default function App() {
  //variable with your apiKey
  const apiKey = "da340fc4";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  useEffect(() =>{
    getMovie("Frozen")
  },[])

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}




