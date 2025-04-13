import styled from "styled-components";

export const Conteiner = styled.div`

`;

export const ProductImage = styled.img`
height: 80px;
padding: 10px;
border-radius: 15px;

`;

export const EditButton = styled.button`
font-size: 20px;
background-color: ${props => props.theme.lightGray};
border: none;
border-radius: 15px;
width: 40px;
height: 40px;
margin: 0 auto;
transition: 200ms all ease-in-out;

&:hover {
    background-color: ${props => props.theme.green};
    scale: 1.1;

    svg {

        fill:${props => props.theme.white};

    }
    


}

`;