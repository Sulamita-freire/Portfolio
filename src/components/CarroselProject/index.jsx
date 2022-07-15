// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import imagem1 from "../../public/imagem1.png";
import imagem2 from "../../public/imagem2.png";
import imagem3 from "../../public/imagem3.png";
import imagem4 from "../../public/imagem4.PNG";
import imagem5 from "../../public/imagem5.png";

import './style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Project } from "../Project";


export function CarroselProject() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <Project img={imagem1} link="https://github.com/Sulamita-freire/Projeto-wireframe" title="Wireframe"/> </SwiperSlide>
        <SwiperSlide> <Project img={imagem2} link="https://github.com/Sulamita-freire/Layout-comunidade-Figma" title="Layout-comunidade-Figma"/> </SwiperSlide>
        <SwiperSlide> <Project img={imagem3} link="https://github.com/Sulamita-freire/Formulario" title="Fomulário"/> </SwiperSlide>
        <SwiperSlide> <Project img={imagem4} link="https://github.com/Sulamita-freire/Rocket-Links" title="Rocket-Links"/> </SwiperSlide>
        <SwiperSlide> <Project img={imagem5} link="https://github.com/Sulamita-freire/OriginSix" title="OriginSix"/> </SwiperSlide>
      
      </Swiper>
    </>
  );
}