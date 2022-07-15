import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
margin-top: 20px;

>a {
    color: ${({ theme }) => theme.COLORS.WHITE};
}

@media (min-width: 600px)
{
justify-content: flex-end;
>a:last-child {
    margin-right: 60px;
}
}
`