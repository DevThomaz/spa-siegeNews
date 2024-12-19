import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    border-radius: 0.3rem;
    box-shadow: #959da533 0px 8px 24px;
    background-color: #fff;
`
export const CardBody = styled.article`
    display: flex;
    width: 100%;
    height: 100%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }

    img{
        width: 40%;
        object-fit: cover;
        object-position: center;
        border-radius: 0 .3rem .3rem 0 ;
    }
`;

export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${props => props.top ? "1.5rem":".9rem"};

    h1{
        margin-bottom: 1rem;
        font-size: ${props => props.top ? "3rem":"1.1rem"};
    }
`


export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`