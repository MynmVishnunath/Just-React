import "./overview.css";
export default function Overview(props){
  return (
    <table>
      <tbody>
       <tr>
         <td className="field-name">Movie :</td>
         <td className="field-data">{props.overview.movieName}</td>
       </tr>
       <tr>
         <td className="field-name">Genre :</td>
         <td className="field-data">{props.overview.genre.join(" | ")}</td>
       </tr>
       <tr>
         <td className="field-name">Director :</td>
         <td className="field-data">{props.overview.director}</td>
       </tr>
       <tr>
         <td className="field-name">Production :</td>
         <td className="field-data">{props.overview.productionCompany}</td>
       </tr>
       <tr>
         <td className="field-name">Released :</td>
         <td className="field-data">{new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"long",year:"numeric"}).format(new Date(props.overview.releaseDate.year,props.overview.releaseDate.month,props.overview.releaseDate.day))}</td>
       </tr>
       <tr>
         <td className="field-name">Awards :</td>
         <td className="field-data">{props.overview.awards.join(", ")}</td>
       </tr>
       <tr>
         <td className="field-name">Rating :</td>
         <td className="field-data">{props.overview.imdbRating} ⭐</td>
       </tr>
      </tbody>
    </table>
  )
}