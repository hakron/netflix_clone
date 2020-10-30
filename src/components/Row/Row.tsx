import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../types";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => (
          <img
            key={movie.id}
            className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
