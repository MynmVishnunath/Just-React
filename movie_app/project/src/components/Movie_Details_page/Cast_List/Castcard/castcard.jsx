import './castcard.css';

export default function(props){
  return(
   <div className="cast-card">
     <div className="cast-img"></div>
     <div className="cast-name">{props.castdata.name}</div>
     <div className="cast-role">{props.castdata.role}</div>
   </div>
  )
}