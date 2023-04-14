import React from 'react';
import "../Hero/HeroModule.css";
import Mate from '../../assets/Hero_mate.png';

function Hero() {
    return (
        <div className="hero">
            <h1>El Mate</h1>
            <p>Nuestro orgullo nacional</p>
            <button>Contactanos</button>
            <div className="img_mate">
                <img src={Mate}/>
            </div>
        </div>
    );
}

export default Hero;