import styled from "styled-components";

export const DefaultButton = styled.button`

width: 100%;
height: 52px;

border: 0;
border-radius: 5px;

font-size: 32px;
color: #fff;

/* color: ${props => props.red ? '#fff' : 'black'}; // no html red={true} ALTERANDO UM ELEMENTO COM PROPS*/

font-family: "Creepster", sans-serif;

background-color: ${(props) => props.theme.purple};
transition: 700ms all ease-in-out;

&:hover {

    background-color:${(props) => props.theme.secondDarkPurple};
    
    font-size: 30px;
    /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
    border-radius: 5px;
    scale: calc(0.95);
    box-shadow: 1px 5px 15px ${(props) => props.theme.purple};
   
}


`