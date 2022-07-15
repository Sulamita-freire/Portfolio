import styled from "styled-components";

export const Container = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;

>h1 {
    font-size:30px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
}

`