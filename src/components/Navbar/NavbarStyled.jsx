import styled from "styled-components";


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem ;
   /*  position: fixed;
    top: 0; */
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ImageLogo = styled.img`
    width: 3.6rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: 1rem;

    i{
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
    }
    input{
        outline: none;
        font-size: 0.9rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

        &:focus{
            border: 1px solid #0bade3;
        }
    }
`

export const Button = styled.button`
    text-transform: uppercase;
    background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: roboto, arial;
    /* width: 40%; */
    font-weight: 500;
    letter-spacing: 0.1rem;
    
    &:hover {
        background-color: #0a86af;
    }
`;