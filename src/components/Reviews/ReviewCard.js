import React from 'react'
import "./Reviews.css"

export default function ReviewCard(props) {
    return (
        <div className="review-card" >
            <h3>{props.name}</h3>
            <p>{props.review}</p>
            
        </div>
    )
}
