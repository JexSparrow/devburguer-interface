import styled from "styled-components";

export const ProductImage = styled.img`
  height: 80px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Buttons = styled.button`
  color: #fff;
  background-color: ${(props) => props.theme.secondDarkPurple};
  width: 25px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.secondBlack};
  transition: 300ms all ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$increase ? "#A4CB23" : "#E10040")};
    scale: calc(1.05);
  }

  &:active {
    scale: calc(1.2);
  }
`;

export const Trash = styled.img`
  height: 30px;
  transition: 300ms all ease-in-out;
  cursor: pointer;

  &:hover {
    scale: calc(1.2);
  }

  &:active {
    scale: calc(2);
  }
`;

export const EmptyCart = styled.div`
  background-color: rgba(69, 15, 127, 0.75);
  border-radius: 20px;
  height: 25vh;
  width: 110%;
  position: relative;
  top: 80px;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms all ease-in-out;
  box-shadow: 2px 10px 20px rgba(41, 41, 42, 0.54);

  &:hover {
    scale: calc(0.95);
    box-shadow: 0px 10px 30px rgba(164, 5, 5, 0.86);
  }

  p {
    color: #fff;
    font-size: 48px;
    font-weight: 600;
    padding-left: 10px;
  }
`;