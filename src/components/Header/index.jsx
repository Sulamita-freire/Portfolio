import { GithubLogo, LinkedinLogo, Envelope } from "phosphor-react";
import { Container } from "./style";

export function Header() {
 return(
    <Container data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="2000">
    <a href="https://github.com/Sulamita-freire"><GithubLogo size={32} /></a>
    <a href="https://www.linkedin.com/in/sulamitafreire/"><LinkedinLogo size={32} /></a>
    <a href="mailto:sulamita.freire@hotmail.com"><Envelope size={32} /></a>
    </Container>
 )
}

