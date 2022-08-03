import { useState, useEffect } from 'react';
import { Outlet} from "react-router-dom"

export function Home(){
    return (<div><h1>My website</h1></div>)
}

export function History(){
    return (<div><h1>Our History</h1></div>)
}

export function About(){
    return (
        <div>
            <h1>About us</h1>
            <Outlet/>
        </div>
    )
}

export function Contact(){
    return (<h1>Contact us</h1>)
}
export  function App(){
    return (<Home />)
}
