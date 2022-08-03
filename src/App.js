import logo from './logo.svg';
import './App.css';
import AddingNumber from './components/addingNumber';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) =>{
    e.preventDefault();

    alert(`${title}, and ${color}`)
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Color input" value={title} onChange={event => setTitle(event.target.value)}></input>
      <input type="color" value={color} onChange={event => setColor(event.target.value)} ></input>
      <button>Add</button>
    </form>
  );
}

export default App;
