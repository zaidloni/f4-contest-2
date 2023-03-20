import React, { useContext, useEffect, useState } from "react";
import userContext from "../utils/userContext";

const MovieList = ({ movies }) => {
  const [m, setM] = useState(movies);
  const { g } = useContext(userContext);
  const [f, setF] = useState(m);
  useEffect(() => {

    setF(() => {
      return m.filter((a) => a.genre === g);
    });
  }, [g]);

  return (
    <div className="mt-4">
      <table className="min-w-full border border-black text-center  ">
        <thead className="bg-gray-100 border-b border-gray-400">
          <tr>
            <th className="border-r px-6 py-4 border-gray-400 text-lg">
              Title
            </th>
            <th className="border-r px-6 py-4 border-gray-400 text-lg">
              Genre
            </th>
            <th className="border-r px-6 py-4 border-gray-400 text-lg">Year</th>
          </tr>
        </thead>
        <tbody>
          {f.length === 0
            ? m.map((movie, i) => (
                <tr key={i} className="border-b border-gray-400">
                  <td className="whitespace-nowrap border-r border-gray-400 px-6 py-4 font-medium ">
                    {movie.title}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 border-gray-400">
                    {movie.genre}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 border-gray-400">
                    {movie.year}
                  </td>
                </tr>
              ))
            : f.map((movie, i) => (
                <tr key={i} className="border-b border-gray-400">
                  <td className="whitespace-nowrap border-r border-gray-400 px-6 py-4 font-medium ">
                    {movie.title}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 border-gray-400">
                    {movie.genre}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 border-gray-400">
                    {movie.year}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
