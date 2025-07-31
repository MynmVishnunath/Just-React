import './movie_list.css';
import Movie_Card from '../movie_card/Movie_Card.jsx';
function Movie_List(props){
  return(
    <section className="movie-list-body">
      <h1>Movies</h1>
      <div className="list-item-container">
        {props.movie_data.map((x,i)=>{return <Movie_Card key={i} movie={x} onClick={props.onClick}/>})}
      </div>
    </section>
  )
}

export default Movie_List;