import React, { useContext } from "react";
import userContext from "../utils/userContext";

const GenreFilter = ({ genres }) => {
  const { g, updateG } = useContext(userContext);
  return (
    <div className="bg-neutral-100 h-fit p-5 rounded-lg border">
      <p className="text-3xl font-bold mb-4">Filter By Genre</p>

      {genres.map((genre) => (
        <button
          onClick={(e) => {
            let val = e.target.textContent;
            updateG(val);
          }}
          key={genre}
          className="button p-2 mr-3 rounded-md bg-neutral-300 w-auto text-lg"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
