import React from 'react'
import "./FruitBasket.css"
export default function FruitCard(props) {
    return (
        <div className="fruit-card" >
            <img className="fruit-img" src={props.img} alt="fruity pic"/>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div>
                <h3>${props.price}</h3>
                <p>{props.rate}</p>
            </div>


        </div>
    )
}
