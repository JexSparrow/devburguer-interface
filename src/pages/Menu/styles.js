import styled from "styled-components";
import BannerCardapio from "../../assets/bg3.svg";
import bg2 from "../../assets/bg2.svg"
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
  width: 100%;
  
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('${BannerCardapio}') no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  height: 380px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor preta semitransparente */
  }

  h1 {
    font-family: "creepster", sans-serif;
    font-size: 64px;
    letter-spacing: 6px;
    color: #fff;
    position: absolute;
    top: 20%;
    right: 15%;
    z-index: 1; /* Garante que o texto fique acima do overlay */
  }

  span {
    font-size: 20px;
    letter-spacing: 1px;
    color: #fff;
    display: block;
    margin-top: 10px;
    z-index: 1; /* Garante que o texto fique acima do overlay */
  }
`;

export const ConteinerGrid = styled.div`
background: linear-gradient(
     rgba(255,255,255, 0.75),
      rgba(255,255,255, 0.35)
    ),
    
    url('${bg2}');
    background-position: center;
    background-size: contain;
`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 60px;


`;

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color:${(props) => props.$isActiveCategory ? '#9758ac' : '#c99fff'};
font-size: 20px;
font-weight: 600;

padding: 12px 0 4px;

border: none;
border-bottom: ${(props) => props.$isActiveCategory && '4px solid #A4CB23'};

transition: 350ms scale ease-in-out;



&:hover {
    scale: calc(1.1);
    color:rgb(163, 101, 183);
    
}

`;

export const ProductsConteiner = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: 70px auto;
gap: 110px;
padding: 40px;
justify-content: center;
max-width: 1280px;

  .eEsJFe {
    height: 150px;
    width: 55%;
    position: absolute;
    top: -100px;
}

  .llwGIr {
    height: 25px;
    position: absolute;
    right: 6%;
    top: 8%;
}
`


