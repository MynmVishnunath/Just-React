import "./cast_list.css";
import CastCard from "./Castcard/castcard";

export default function CastList(props){
  return(
    <>
    {props.castlist.map(cast=><CastCard castdata={cast}/>)}
    </>
  )
}