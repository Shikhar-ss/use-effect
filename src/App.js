import './App.css';
import { useState, useEffect } from "react";
import { getList, setItem } from "./services/list";

function App() {

  const [list, setList] = useState([])
  const [itemInput, setItemInput] = useState('')
  // const [clearItem, resetItemInput] = useState()
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false
  }, [itemInput])

  const handleSubmit = (e) => {
    e.preventDefault()
    setItem(itemInput).then(() => {
      setItemInput('');
    });
  }

  return (
    <div className="wrapper">
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          <p>NEW ITEM: </p>
          <input type='text' onChange={e => setItemInput(e.target.value)} value={itemInput} />
        </label>
        <button type='submit' >SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
