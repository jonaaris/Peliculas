import { Link } from 'react-router-dom';
import stilo from './MovieCard.module.css'

export function MovieCard({movie}) {
 // console.log(stilo)
  const imageUrl = 'https://image.tmdb.org/t/p/w300' +movie.poster_path;

  return <li className={stilo.movieCard}>
    <Link to={'/movies/' +movie.id}>
    <img width={230}
    height={345}
     className={stilo.movieImage}
      src={imageUrl} 
      alt={movie.title} />
    <div>{movie.title} ({movie.release_date.slice(0,4)})</div>
    </Link>
    </li>
}