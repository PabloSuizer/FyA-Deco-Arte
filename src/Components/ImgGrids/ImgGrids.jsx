import React from 'react';
import './ImgGrids.css';
import img1 from '../../assets/Imagen 1.png';
import img2 from '../../assets/Imagen 2.png';
import img3 from '../../assets/Imagen 3.png';
import img4 from '../../assets/Imagen 4.png';
import img5 from '../../assets/Imagen 5.png';
import img6 from '../../assets/Imagen 6.png';
import img7 from '../../assets/Imagen 7.png';
import img8 from '../../assets/Imagen 8.png';
import img9 from '../../assets/Imagen 9.png';
import img10 from '../../assets/image 10.png';

const ImgGrids = () => {

  return (
    <div class="parent">
      <div class="div1"><img src={img1}/> </div>
      <div class="div2"><img src={img2}/></div>
      <div class="div3"><img src={img3}/></div>
      <div class="div4"><img src={img4}/></div>
      <div class="div5"><img src={img5}/></div>
      <div class="div6"><img src={img6}/></div>
      <div class="div7"><img src={img7}/></div>
      <div class="div8"><img src={img8}/></div>
      <div class="div9"><img src={img9}/></div>
      <div class="div10"><img src={img10}/></div>
    </div>
  );
};

export default ImgGrids;

