import styled from "styled-components";
import texture from "../../assets/texture.svg"
import Background from "../../assets/bg2.svg"

export const Conteiner = styled.div`

width: 100%;
background-image: linear-gradient(rgba(1, 1, 1, 0.95), rgba(77, 15, 113, 0.55),rgba(120, 109, 109, 0.06)),url('${Background}');
background-size: cover;
min-height: 100vh;

`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.2)), url('${texture}');
  background-position: center;
  background-size: cover;
  height: 16vh;

  img {
    margin-top: 16px;
    height: 120px;
    z-index: 1;
  }
`;

export const Title = styled.div`
font-size: 32px;
font-weight: 800;
color: #A4CB23;
padding-bottom: 12px;
text-align: center;
position: relative;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #A4CB23;
    left: 50%;
    transform: translateX(-50%);
}
`;

export const Content = styled.div`
display: grid;
gap: 40px;
grid-template-columns: 70% 30%;
width: 100%;
max-width: 1360px;
padding: 40px;
margin: 0 auto;

`;