import { ReactElement, useContext } from "react";
import { IMovie } from "../interfaces";
import { MovieContext } from "../context/MovieProvider";

interface IMovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCardProps): ReactElement {
  const { removeMovie } = useContext(MovieContext);

  return (
    <article className="movie-card" onClick={() => removeMovie(movie)}>
      <div className="title-container">
        <p className="title">{movie.title}</p>
        <p className="rating">{movie.rating}/5</p>
      </div>
      <p className="genre">{movie.genre}</p>
      <p className="description">{movie.description}</p>
    </article>
  );
}
