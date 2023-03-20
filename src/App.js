import React, { useState } from "react";
import Heading from "./components/Heading";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import "./App.css";
import { genres, movies } from "./utils/constants";
import userContext from "./utils/userContext";
const App = () => {
  const [g, setG] = useState("a");

  function updateG(value) {
    setG(value);
  }
  return (
    <userContext.Provider value={{ g, updateG }}>
      <div className="w-9/12  m-auto   mt-14">
        <Heading />
        <GenreFilter genres={genres} />
        <MovieList movies={movies} />
      </div>
    </userContext.Provider>
  );
};

export default App;
