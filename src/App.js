import React from "react";
import Heading from "./components/Heading";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import "./App.css";
import { genres } from "./utils/constants";
import { movies } from "./utils/constants";
const App = () => {
  return (
    <div className="w-9/12  m-auto   mt-14">
      <Heading />
      <GenreFilter genres={genres} />
      <MovieList movies={movies} />
      {/* <Test/> */}
    </div>
  );
};

export default App;
