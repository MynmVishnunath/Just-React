import './Moviecard.css';
import {Link} from 'react-router-dom';
function Movie_Card(props){
  return (
    <Link to="/detail/overview" className="link" onClick={()=>{
      props.onClick(props.movie.Index);
    }}>
    <div className="Movie_card">
      <div className="Movie_poster">
        <img src={props.movie.posterImage} alt="muff poster" width="" />
      </div>
      <div className="Movie_Rating_and_Name">
        <h4 className="Movie_Name">{props.movie.movieName}</h4>
        <div className="Date_and_Rating">
          <span> {props.movie.releaseDate?.year} </span> ● <span> Imdb {props.movie.imdbRating} </span><img width="15" height="15" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Movie_Card;