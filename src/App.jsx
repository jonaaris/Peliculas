
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  //Navigate
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";



export function App(){
  return (<Router>
    <header >
      <Link to='/'><h1 className={styles.title}>Movies</h1> </Link>
      <Link to='/'></Link>
      <Link to='/movie'></Link>
    </header>
    <main>
      <Routes>
          <Route  path="/" element={<LandingPage />} /> 
          <Route  path="/movies/:movieId" element={<MovieDetails />} />
          {//<Route path= "*" element={<Navigate replace to="/" />} />    {// te lleva al inicio si no hay url válida
          }
          <Route path="*" element={<div className={styles.error}> ERROR 404. NOT FOUND URL.</div>} />
    
        </Routes>
    </main>
  </Router>)
}

