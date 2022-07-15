import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 240px;
  padding: 10px 20px 80px 20px;
  border-bottom: 20px solid  #FF6D00;
  border-radius: 10px;
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  
  animation: floating 6s ease-in-out infinite;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  >div{
    width: 100%;
    max-width: 267px;
    display: flex;
    justify-content: center;

  >p{
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
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
  }
`