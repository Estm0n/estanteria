import { LibroCard } from "./LibroCard";
import libros from "./libros.json";

export function LibrosGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}