import { Link } from 'react-router-dom';
import stilo from './MovieCard.module.css' 
import { getMovieImg } from '../utils/getMovieImg';

export function MovieCard({movie}) {
 // console.log(stilo)
 const imageUrl = getMovieImg(movie.poster_path, 300);
/*   const imageUrl = movie.poster_path 
  ?  'https://image.tmdb.org/t/p/w300' +movie.poster_path 
  : placeholder; */

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