import { Container, Description } from "./style"

export function About({description}) {
    return(
       <Container data-aos="zoom-in"  data-aos-duration="2000">
       <img src="https://github.com/Sulamita-freire.png" alt="" />
       <Description>
       {description}
       </Description>
       </Container>
    )
   }
   