import styled from "styled-components";

export const Conteiner = styled.div`
width: 100%;
height: 5vh;
background-color: ${(props) => props.theme.secondDarkPurple} ;
display: flex;
justify-content: center;
align-items: center;

p {
    font-size: 15px;
    color: #fff;
}

span {
    font-size: 16px;
    color: #A4CB23;
    font-weight: 600;
}



`