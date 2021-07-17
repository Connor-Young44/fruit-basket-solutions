import React from 'react'
import "./FruitBasket.css"
import FruitCard from './FruitCard'
export default function FruitBasket() {
    const samples = [{id:1, img:"https://www.ndugaonwheels.com/wp-content/uploads/2020/04/apple.jpg", name:"Apple", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", price:5, rate:"Per hour"},
    {id:2, img:"https://www.meyco.com.tr/wp-content/uploads/2018/11/seftali-photo-800x800.jpg", name:"Peaches", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", price:5, rate:"Per hour"},
    {id:3, img:"https://www.vegetamo.it/wp-content/uploads/2018/04/pomodori.jpg", name:"Tomatoes", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", price:5, rate:"Per hour"}]
    return (
        <div className="fruit-basket-main" >
            <h1 className="fruit-basket-title" >Start mixing your fruit basket!</h1>
            <h4>The services below give an impression of what is currently available based on our network. if you cannot find what you are looking for, please get in contact with us to discuss the possibilities.</h4>
            <h2>"taste every fruit of every tree in the garden at least once. It is an insult to creation not to experience it fully. Temperance is wickedness" - Stephen Fry</h2>
            <div className="fruit-deck" >
                {samples.map((item) => (
                    <FruitCard key={item.id} img={item.img} name={item.name} desc={item.desc} price={item.price} rate={item.rate} />

                ))}
            </div>
            <button className="fruit-basket-button" >Schedule a service</button>
        </div>
    )
}
