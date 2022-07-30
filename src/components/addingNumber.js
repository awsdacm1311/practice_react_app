import React, { useState } from 'react'

function AddingNumber(){

    const [counter, setCounter] = useState(0);

    const addValueCounter = () =>{
        let newVal= counter+1;
        setCounter(newVal);
    }

    const removeValueCounter = () =>{
        let newVal= counter-1;
        setCounter(newVal);
    }

    return(
    <div>
        <div>{counter}</div>
        <button id="addCounter" onClick={() => addValueCounter()}>Plus 1</button>
        <button id="addCounter" onClick={() => removeValueCounter()}>Minus 1</button>

    </div>
    );

 }

export default AddingNumber;