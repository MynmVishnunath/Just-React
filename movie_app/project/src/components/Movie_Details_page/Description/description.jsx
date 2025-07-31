import './description.css';

export default function Description(props){
  return (
    <p className="movie-description">{props.description}</p>
  )
}