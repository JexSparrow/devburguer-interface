import { Link } from "react-router-dom";
import styled from "styled-components";

export const Conteiner = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
background-color: ${props => props.theme.black};

img {
    width: 60%;
    margin: 40px auto;
    transition: 250ms all ease-in-out;
    cursor: pointer;

    &:hover{
        scale: 1.1;
       
    }
   

}`;


export const NavLinksConteiner = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;

export const NavLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
gap: 22px;
padding: 15px 10px;
/* background-color: ${props => props.$isActive ? props.theme.darkPurple : 'transparent'}; */


text-decoration: none;
color: ${props => props.theme.white};

&:hover {
    background-color: ${props => props.theme.purple};

}

span {
    font-size: 20px;
    font-weight: 600;
    transition: 150ms all ease-in-out;
    color: ${props => props.$isActive ? props.theme.green : ''};

        &:hover {
            color: ${props => props.theme.darkPurple};
            scale: calc(1.1);
    }
}


`;

export const Footer = styled.footer`
margin-top: auto;
width: 100%;

span{

    &:hover {
        color: red;
         
    }
}
`;


