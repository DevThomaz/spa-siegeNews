import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    border-radius: 0.3rem;
    box-shadow: #959da533 0px 8px 24px;
    background-color: #fff;
    padding: 2rem;
`
export const CardBody = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
        margin-bottom: 1rem;
    }
    
    img{
        width: 30%;
        object-fit: cover;
        object-position: center;
    }
    div{
        display: flex;
        align-items: center;
    }
`;
export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`