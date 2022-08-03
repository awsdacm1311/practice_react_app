import logo from './logo.svg';
import './App.css';
import AddingNumber from './components/addingNumber';
import { useRef } from 'react';

function App() {

  const txtColorText = useRef();
  const txtColorRBG = useRef();

  const submit = (e) =>{
    e.preventDefault();
    const title = txtColorText.current.value;
    const val = txtColorRBG.current.value;
    alert(`${title}, and ${val}`)
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtColorText} type="text" placeholder="Color input"></input>
      <input ref={txtColorRBG} type="color" ></input>
      <button>Add</button>
    </form>
  );
}

export default App;
