import React from 'react'
import { Link } from 'react-router-dom'
import  Banner  from '../assets/pizza.jpeg'
import  '../styles/Home.css'


export default function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
            <div className='headerContainer' >
                <h1>Walbers Pizeria </h1>
                <p>Pizza to fit any taste</p>
                <Link to="/menu">
                <button>Order now</button>
                </Link>
            </div>
        </div>
    )
}
