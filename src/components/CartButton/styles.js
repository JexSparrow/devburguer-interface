import styled from "styled-components";

export const ConteinerButton = styled.button`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
background-color:${(props) => props.theme.purple} ;
height: 48px;
border: none;
border-radius: 8px;

transition: 350ms all ease-in-out;


&:hover {
    cursor: pointer;
    scale: 0.95;
    background-color: ${(props) => props.theme.secondDarkPurple};

    img{
        height: 22px;
    }
}

&:active {
    background-color: ${(props) => props.theme.darkRed};

}


img {

    height: 24px;
    transition: 500ms all ease-in-out;
    

}


`