import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
margin-bottom: 50px;

animation: floating 6s ease-in-out infinite;

>section {
    width: 280px;
    height: 330px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom: 20px solid  #DDA0DD;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
     
>div {
    img {
        width: 260px;
        margin: 20px 0;
        border-radius: 5px;
    }
}
}

@keyframes floating {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-15px);
	}
	100% {
		transform: translateY(0px);
	} 
}
@media (min-width: 600px) {
    >section{
        width: 590px;
        >div {
    img {
        width: 380px;
    }
}
    }   
}

`

export const Icon = styled.div`
margin-bottom: 20px;
>a {
    color: ${({ theme }) => theme.COLORS.WHITE};
}
`
