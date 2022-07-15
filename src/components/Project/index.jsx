import { Container, Icon } from "./style";
import {GithubLogo} from "phosphor-react"

export function Project({link, title, img}) {
  return (
    <Container>
      <section data-aos="flip-up" data-aos-duration="1000">
        <Icon><a href={link}><GithubLogo size={32} /></a></Icon>
        <strong>{title}</strong>
        <div>
            <img src={img} alt="" />
        </div>
      </section>
    </Container>
  );
}
