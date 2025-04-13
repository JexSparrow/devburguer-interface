import { Link } from "react-router-dom";
import styled from "styled-components";

export const Conteiner = styled.div`
.carousel-item {

    padding: 10px 30px 0px 42px;

    margin-bottom: 10px;

}

.react-multiple-carousel__arrow--left {
  position: absolute;
  top: 50%;
  left: 10px; /* Ajustar para controlar a distância da borda esquerda */
  transform: translateY(-50%); /* Centralizar verticalmente */
  z-index: 1000;
  background: transparent;
  border: none;
  min-width: auto;
  min-height: auto;
  cursor: pointer;

  
    &:active {
      &::before {
        color: ${(props) => props.theme.orange}; /* Define a cor da seta como verde quando clicada */
      }
    }
}

.react-multiple-carousel__arrow--right {
  position: absolute;
  top: 50%;
  right: 10px; /* Ajustar para controlar a distância da borda direita */
  transform: translateY(-50%); /* Centralizar verticalmente */
  z-index: 1000;
  background: transparent;
  border: none;
  min-width: auto;
  min-height: auto;
  cursor: pointer;

  &:active {
      &::before {
        color: ${(props) => props.theme.orange}; /* Define a cor da seta como verde quando clicada */
      }
    }
}
   


.react-multiple-carousel__arrow--left::before {
  color: purple;
  font-size: 3.5em; /* Aumenta o tamanho da seta */
  font-weight: 700;
   
}

.react-multiple-carousel__arrow--right::before {
  color: purple;
  font-size: 3.5em; /* Aumenta o tamanho da seta */
  font-weight: 700;
   
}

.react-multiple-carousel__arrow--left:focus, 
.react-multiple-carousel__arrow--left:active,
.react-multiple-carousel__arrow--right:focus,
.react-multiple-carousel__arrow--right:active {
  color: green; /* Define a cor da seta como verde quando clicada */
}

.react-multi-carousel-track{
    padding: 0px 10px;
}
`

export const Title = styled.h2`
font-size: 36px;
color: ${(props) => props.theme.purple};
text-align: center;
position: relative;
padding: 8px 0px 20px 0px;


&::after {

    content: '';
    height: 6px;
    width: 76px;
    position: absolute;
    bottom: 50px;
    background-color: ${(props) => props.theme.purple};
    
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

   
}
`

export const ConteinerItems = styled.div`
  display: flex;
  align-items: center;

  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;

  margin-top: 10px;

  width: 90%; 
  height: 220px; 

  border-radius: 25px;

box-shadow: rgba(50, 50, 93, 0.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.7) 0px 3px 7px -3px;
`

export const CategoryButtonCarousel = styled(Link)` //como aqui esta link lá precisa usar o TO
color: #fff;

font-size: 22px;
font-weight: bold;
letter-spacing: 1px;
background-color: rgba(0,0,0, 0.5);
text-decoration: none;
padding: 10px 20px;
border-radius: 25px;
position: absolute;
bottom: 10px;
left: 55px;

transition: 300ms all ease-in-out;

&:hover{

  scale: calc(1.05);
  background-color: rgba(69, 15, 127, 0.75);


}
`;