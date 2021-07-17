import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navbar" >
            <NavLink to="/" >About us</NavLink>
            <NavLink to="/" >Reviews</NavLink>
            <NavLink to="/" >Services</NavLink>
            <NavLink to="/" >Join us</NavLink>
        </div>
    )
}
