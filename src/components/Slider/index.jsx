// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FileHtml, FileCss, FileJs, GithubLogo, Atom } from "phosphor-react";

import './style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";

export function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <Card title="HTML" icon={<FileHtml size={32} />} description="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores." /> </SwiperSlide>
        <SwiperSlide> <Card title="CSS" icon={<FileCss size={32} />} description="É um mecanismo para adicionar estilo a um documento web. Pode ser aplicado diretamente nas tags ou ficar contido dentro das tags." /> </SwiperSlide>
        <SwiperSlide> <Card title="JavaScript" icon={<FileJs size={32} />} description="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."/> </SwiperSlide>
        <SwiperSlide> <Card title="Git" icon={<GithubLogo size={32} />} description="Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software."/> </SwiperSlide>
        <SwiperSlide> <Card title="React" icon={<Atom size={32} />} description="É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram e outras."/> </SwiperSlide>
      
      </Swiper>
    </>
  );
}