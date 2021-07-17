import React from 'react'
import Footer from '../../components/Footer'
import FruitBasket from '../../components/FruitBasket'
import Landing from '../../components/Landing'
import Reviews from '../../components/Reviews'
import Services from '../../components/Services'
import Specialists from '../../components/Specialists'

export default function HomePage() {
    return (
        <div style={{maxWidth:"100vw"}} >
            <Landing/>
            <Specialists/>
            <Services/>
            <Reviews/>
            <FruitBasket/>
            <Footer/>
        </div>
    )
}
