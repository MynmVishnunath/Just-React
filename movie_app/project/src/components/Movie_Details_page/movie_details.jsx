import './movie_details.css';
import {useRef, useEffect} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';


function Movie_Detail(props){
   const focusdiv = useRef(null);
   const location = useLocation();
   
  // Sync focus position with current route
  useEffect(() => {
    if (focusdiv.current) {
      const path = location.pathname;
      if (path.includes('/overview') || path === '/detail') {
        focusdiv.current.style.left = '0px';
      } else if (path.includes('/description')) {
        focusdiv.current.style.left = '100px';
      } else if (path.includes('/cast')) {
        focusdiv.current.style.left = '200px';
      }
    }
  }, [location.pathname]);


 return (
   <section className="movie-detail-container">
     <header>
       <h1>Movie Details</h1>
     </header>
     <img src={props.selectedMovie.posterImage} alt="poster" className="movie-poster" loading="lazy" />
     <div className="nav-buttons">
      <Link to="overview" > <button className="overview">Overview</button></Link>
       <Link to="description"><button className="description">Description</button></Link>
      <Link to="cast"><button className="cast">Cast</button></Link>
       <div className="btn-focus" ref={focusdiv}></div>
     </div>
     <div className="show-details-section">
       <Outlet className="Outlet" />
     </div>
   </section>
 )
}
export default Movie_Detail;