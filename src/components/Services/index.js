import React from 'react'
import "./Services.css"
import Team from "./Team.png"
export default function Services() {
    return (
        <div className="services-main" >
            <img className="services-img" src={Team} alt="services"/>

        <div className="services-text" >
            <h1 className="services-title" >Services tailored to your needs</h1>
            <p className="services-desc" >Creativity, flexibility and personalisation are Fruit Basket Solutions fundamental values. We strive to deliver durable and smart solutions with an applied focus. Established from a hospitality state of mind, hospitality hearted quality is now available for the greater audience.

            </p>
            <button className="services-button" >Learn More</button>
        </div>
        </div>
    )
}
