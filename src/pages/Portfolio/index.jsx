import { About } from "../../components/About";
import { CarroselProject } from "../../components/CarroselProject";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";
import { Title } from "../../components/Title";

export function Portfolio() {
 return(
    <>
    <Header />
    <About description="Olá, me chamo Sulamita, atualmente dedicada a área de programação como Desenvolvedora Front-End, 
    área na qual estou entusiasmada e procurando novos conhecimentos e desafios a cada dia."/>
    <Title title="Minhas Stacks"/>
    <Slider />
    <Title title="Meus Projetos"/>
    <CarroselProject />
    
    </>
 )
}