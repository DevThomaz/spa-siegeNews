import styled from "styled-components";

export const ContainerResults = styled.section`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 50%;
    }
`;

export const SearchPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem auto;
    width: 80%;
`

export const TextResults = styled.div`
    padding: 1rem;
    background-color: #fff;
    width: 80%;
    border-radius: .3rem;
    box-shadow: #959da533 0px 8px 24px;

    span{
        font-size: 1rem;
    }
`