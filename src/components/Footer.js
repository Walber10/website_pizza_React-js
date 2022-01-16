import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css'


export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
            <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedinIcon/>
            </div>
            <p> &cope; 2021 walberamorim</p>
        </div>
    )
}
