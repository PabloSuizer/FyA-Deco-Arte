import React from 'react';
import './Footer.css'
import Logo from '../../assets/Logo FyA.png'
import WhatsApp from '../../assets/Whatsapp.png'
import Instagram from '../../assets/Instagram.png'
import Facebook from '../../assets/facebook.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="footer-contact">
                        <p>Dirección: Fray Luis Beltran 1610 E Santa Lucia, San Juan, Argentina</p>
                        <p>Teléfono: 2644633599</p>
                        <p>Correo: fyadeco@gmail.com</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <img  className="Logo-social" src={WhatsApp} alt="Logo" />
                        </a>
                        <a href="https://www.facebook.com/FyAdecoarte?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <img className="Logo-social" src={Facebook} alt="Logo" />
                        </a>
                        <a href="https://instagram.com/fya_decoarte?igshid=MmU2YjMzNjRlOQ==" target="_blank" rel="noopener noreferrer">
                            <img className="Logo-social" src={Instagram} alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
