import styled from "styled-components";

export const Container = styled.div`

width:100%; 
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
flex-direction: column;

>img { 
    width: 100px;
    height: 100px;
    border-radius:50%;
 }

 @media (min-width: 600px) {
    flex-direction: row;
    gap: 110px;
    >img{
        width: 200px;
        height: 200px;
    }
 }

`

export const Description = styled.div`
margin: 30px 50px 0 50px;
display: flex;
justify-content: center;
align-items: center;
line-height: 25px;

@media (min-width: 600px){
    max-width:300px;
}
`