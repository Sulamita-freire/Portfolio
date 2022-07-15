import { GithubLogo, LinkedinLogo, Envelope } from "phosphor-react";
import { Container } from "./style";

export function Header() {
 return(
    <Container >
    <a href="https://github.com/Sulamita-freire"><GithubLogo size={32} /></a>
    <a href="https://www.linkedin.com/in/sulamitafreire/"><LinkedinLogo size={32} /></a>
    <a href="mailto:sulamita.freire@hotmail.com"><Envelope size={32} /></a>
    </Container>
 )
}

