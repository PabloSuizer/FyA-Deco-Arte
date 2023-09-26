import React from 'react'
import ImgGrids from '../../Components/ImgGrids/ImgGrids';
import Hero from './Hero.jsx';
import './Home.css';
import Button from '../../Components/Button/Button';
import MediaCard from '../../Components/Cards/MediaCard';
import mermelada from '../../assets/Rectangle.png';
import mermelada1 from '../../assets/Mate 1.png';
import Banner from '../../Components/Banner/Banner';
import BannerMayorista from '../../assets/Img banner mayorista.png';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Hero></Hero>
      <ImgGrids></ImgGrids>
      <Button></Button>
      <div className="cards">
        <MediaCard
          imageSrc={mermelada}
          title="Título 1"
          description="Descripción del contenido 1"
          buttonText="Ver más"
        />
        <MediaCard
          imageSrc={mermelada1}
          title="Título 1"
          description="Descripción del contenido 1"
          buttonText="Ver más"
        />
        <MediaCard
          imageSrc={mermelada}
          title="Título 1"
          description="Descripción del contenido 1"
          buttonText="Ver más"
        />
      </div>

      <Banner
        imageSrc={BannerMayorista}
        title="No te lo pierdas"
        description="Si llevas mas de 10 mates tenes un super descuento !!!!!"
        buttonLabel="Consultar"
        buttonLink="/Mayorista"
      />
      
      <Footer></Footer>
    </div>
  )
}

export default Home