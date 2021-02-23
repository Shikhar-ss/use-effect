import './App.css';
import { useState,useEffect } from "react";
import {getList} from "./services/list";

function App() {

  const [list,setList] = useState([])

  useEffect(()=>{
    let mounted = true;
    getList()
    .then(items => {
      if(mounted){
        setList(items)
      }
    })
    return () => mounted =false
  }, [] )
  return (
    <div className="wrapper">
      <ul>
      {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
    </div>
  );
}

export default App;
