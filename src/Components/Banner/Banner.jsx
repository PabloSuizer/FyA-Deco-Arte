import React from 'react';
import './Banner.css'

const Banner = ({ imageSrc, title, description, buttonLabel, buttonLink }) => {
    return (
        <div className="banner1">
            <img
                src={imageSrc}
                alt="Imagen informativa"
                className="banner-image"
            />
            <div className="banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={buttonLink} className="btn">
                    {buttonLabel}
                </a>
            </div>
        </div>
    );
};

export default Banner;
