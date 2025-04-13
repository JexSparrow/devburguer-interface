import styled from "styled-components";
import backgroundLogin from "../../assets/bg1.svg"
import backgroundForm from "../../assets/bg2.svg"
import { Link as LinkReact } from "react-router-dom";


export const Conteiner = styled.div`

height: 100vh;
width: 100vw;
display: flex;

`

export const LeftConteiner = styled.div`

background: url('${backgroundLogin}');
background-size: cover;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
justify-content: center;
align-items: center;

img {
    width: 75%;
}

`

export const RightConteiner = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: url('${backgroundForm}');
background-size: cover;
background-color: #1e1e1e;

height: 100%;
width: 100%;
max-width: 50%;



`

export const Title = styled.h1`

font-size: 42px;
font-family: "Chewy", serif;
color: #fff;

span {
    color: ${(props) => props.theme.purple};
    font-family: "Creepster";
}

`

export const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;



`

export const InputConteiner = styled.div`

display: flex;
flex-direction: column;
gap: 8px;

label {
    font-size: 20px;
    color: #fff;
    font-weight: bold;

}

input {
    height: 42px;
    border-radius: 5px;
    border: none;
    transition: 200ms ease;
    padding: 5px 10px;

    &:hover{

cursor: pointer;
background-color:rgb(203, 200, 190);

}
}

p {
    font-size: 16px;
    line-height: 80%;
    color: #A4CB23;
    font-weight: 600;
    height: 10px;

}
`

export const Paragraph = styled.p`

color: #fff;
    font-weight: bold;

`

export const Link = styled(LinkReact)`

        text-decoration: underline;
        font-weight: 400;
        color: #fff;

`
