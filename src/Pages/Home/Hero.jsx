import React from 'react';
import mermelada from '../../assets/Rectangle.png';
import './Hero.css'; // Importa el archivo CSS para estilos del banner


const Hero = () => {
    return (
        <div className="banner">
            <img src={mermelada} />
            <div className='banner-secundario'>
                <h2>F&A DecoArte</h2>
                <p>Trabajamos con dedicacion pensando en la sastifacion de nuestros clientes </p>
                <button className='Button-nosotros'>Nosotros</button>
            </div>
            
        </div>
    );
};

export default Hero;





// import React from 'react';
// import './Hero.css';
// // import mate from '../../assets/Mate 1.png';


// const Banner = () => {
//     return (
//         <div className="banner">
//             <div>
//                 <div className='text-banner'>
//                     <h2 >El Mate</h2>
//                     <p>Nuestro orgullo nacional</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;