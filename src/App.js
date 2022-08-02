import logo from './logo.svg';
import './App.css';
import AddingNumber from './components/addingNumber';
import { useState, useEffect } from 'react';

function App() {

  const [emotion, setEmotion] = useState("Happy");

  useEffect(() => {
    console.log(emotion)
  },[emotion])

  return (
    <div className='App'>
      <h1>This is my emotion {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button>
    </div>
  );
}

export default App;
