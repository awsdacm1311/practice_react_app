import logo from './logo.svg';
import './App.css';
import AddingNumber from './components/addingNumber';
import { useState, useEffect, useReducer } from 'react';

function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [check, setCheck] = useReducer((checked)=> !checked, false);

  useEffect(() => {
    console.log(emotion)
  },[emotion])

  return (
    <div className='App'>
      <input type="checkbox" value={check} onChange={setCheck}></input>
      <label>{check ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
