import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide'
            style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className='rightSide'>
            <h1>Contact us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name' type='text'/>
                <label htmlFor='name'>Email</label>
                <input name='email' placeholder='Enter full email' type='text'/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder='Enter message...' name='required'></textarea>
                <button type='submit'>Send</button>
            </form>
            </div>
        </div>
    )
}
