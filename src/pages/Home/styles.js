import styled from "styled-components";
import banner from '../../assets/banner.svg';
import bg2 from '../../assets/bg2.svg';

export const Banner = styled.div`
  background: url('${banner}');
  height: 360px;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 64px;
    position: absolute;
    top: 15%;
    right: 5%;
    font-family: 'Creepster', sans-serif;
    color: ${(props) => props.theme.green};
    letter-spacing: 2px;
    
  }
`;

export const Conteiner = styled.section`
  background: linear-gradient(
   rgba(255,255,255, 0.65),
    rgba(255,255,255, 0.75)
  ),
  
  url('${bg2}');
  height: auto;
  background-position: center;
  background-size: contain;
  
`;