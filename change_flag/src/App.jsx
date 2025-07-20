import { useRef, useState } from 'react';
import './App.css';

function ChangeStyle(FlagPart,style){
 const {Top,Mid,Botm} = FlagPart;
 Top.current.style.background=style.top;
 Mid.current.style.background=style.mid;
 Botm.current.style.background=style.bottom;
}


function App() {
  const [count, setCount] = useState(0);
 const Top = useRef(null);
 const Mid=useRef(null);
 const Botm = useRef(null);
  return (
    <section>
   <div className="flag">
     <div className="top" ref={Top} ></div>
     <div className="middle" ref={Mid}></div>
     <div className="bottom" ref={Botm}></div>
   </div>
   <div className="button-section">
     <button onClick={()=>{ChangeStyle({Top,Mid,Botm},{top:"green",mid:"white",bottom:"orange"})}}>Design 1</button>
     <button onClick={()=>{ChangeStyle({Top,Mid,Botm},{top:"yellow",mid:"green",bottom:"tomato"})}}>Design 2</button>
     <button onClick={()=>{ChangeStyle({Top,Mid,Botm},{top:"blue",mid:"green",bottom:"yellow"})}}>Design 3</button>
   </div>
   </section>
  )
}

export default App
