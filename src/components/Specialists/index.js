import React from 'react'
import "./specialists.css"
import Team from "./undraw_Experts_re_i40h.png"

export default function Specialists() {
    return (
        <div className="specialists-main" >
        <div className="main-section" >
            <h1 className="title" >Our Specialists Care <br/> About Your <br/> Company</h1>
            <p className="main-text" >We know how stressful entrepeneurship is. Choose for a care-free and personal approach.</p>
            <p className="main-text" >Fruit Basket Solutions offers B2B users a wide range of solution-based services for your small or mid-scale enterprise.</p>
            <button className="specialists-button" >Meet the team</button>
            
        </div>
        <img src={Team} alt="the team" className="team-image" />
        </div>
    )
}
