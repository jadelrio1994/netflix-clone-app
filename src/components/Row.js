import React, { useEffect, useState } from "react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              !isLargeRow ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
