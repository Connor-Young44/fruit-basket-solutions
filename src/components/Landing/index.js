import React from 'react'
import "./landing.css"
import Banana from "./banana.jpg"
import TitleImage from "./Title_Light-01.png"
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="landing-section" style={{backgroundImage: `url(${Banana})` }} >
            <img className="landing-logo" src={TitleImage} alt="title" />
            <div className="link-section" >
            <div className="links" >
                <Link className="link" to="/" >About Us</Link>
                <Link className="link" to="/" >Reviews</Link>
                <Link className="link" to="/" >Services</Link>
                <Link className="link" to="/" >Join Us</Link>
            </div>
            <h1 className="landing-header" >Fruitfull <br/> Solutions For Your <br/> Buisness</h1>
            <button className="landing-button" >Lets Meet</button>
            </div>
            
        </div>
    )
}
