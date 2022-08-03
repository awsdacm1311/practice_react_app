import { useState, useEffect } from 'react';


export function Home(){
    return (<div><h1>My website</h1></div>)
}

export function About(){
    return (<h1>About us</h1>)
}

export function Contact(){
    return (<h1>Contact us</h1>)
}
export  function App(){
    return (<Home />)
}
