export interface IMovie {
  title: string;
  rating: string;
  genre: string;
  description: string;
}

export interface IOption {
  id: string;
  label: string;
  value: string;
}

export interface IMovieContext {
  movies: IMovie[];
  removeMovie: (movie: IMovie) => void;
}
