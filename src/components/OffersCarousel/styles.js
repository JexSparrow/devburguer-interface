import styled from "styled-components";

export const Conteiner = styled.div`
  // Remove overflow-x: hidden; if you want the content to overflow
  overflow-x: hidden; 

  .carousel-item {
    padding: 40px 50px;
  }

  // Remove or modify the rule below if you don't want the content to overflow
  .react-multi-carousel-list { 
    overflow: visible; 
  }

  .react-multiple-carousel__arrow--left,
  .react-multiple-carousel__arrow--right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    background: transparent;
    border: none;
    min-width: auto;
    min-height: auto;
    cursor: pointer;

    &:active,
    &:focus {
      &::before {
        color: #A4CB23;
      }
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 10px;
  }

  .react-multiple-carousel__arrow--right {
    right: 10px;
  }

  .react-multiple-carousel__arrow--left::before,
  .react-multiple-carousel__arrow--right::before {
    color: purple;
    font-size: 3.5em;
    font-weight: 700;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #A4CB23; // Consider using a variable for the color
  text-align: center;
  position: relative;
  padding: 20px 0px;
  margin-bottom: 70px;

  &::after {
    content: '';
    height: 6px;
    width: 76px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #A4CB23; // Consider using a variable for the color
  }
`;