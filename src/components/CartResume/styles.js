import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(235, 230, 238, 0.85);
  display: flex;
  flex-direction: column;
  min-height: 240px;
  max-height: 360px;
  border-radius: 20px;
  margin-bottom: 10%;
  padding-bottom: 15%;
`;

export const Title = styled.div`
  background-color: #1D1E1F;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Content = styled.div`
  display: grid;
  text-align: justify;
  padding: 15px;
  grid-template-areas:
    "Items Items-Price"
    "Delivery-Tax Tax-Price"
    "Total Total-Price";
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;

  .Items {
    grid-area: "Items";
  }

  .Items-Price {
    grid-area: "Items-Price";
    font-weight: 700;
  }

  .Delivery-Tax {
    grid-area: "Delivery-Tax";
  }

  .Tax-Price {
    grid-area: "Tax-Price";
    color: ${(props) => props.theme.darkRed};
    font-weight: 700;
  }

  .Total {
    margin-top: 20px;
    grid-area: "Total";
    font-size: 22px;
    font-weight: 700;
  }

  .Total-Price {
    margin-top: 20px;
    grid-area: "Total-Price";
    font-size: 22px;
    font-weight: 700;
    color: ${(props) => props.theme.secondDarkPurple};
  }

  p {
    color: ${(props) => props.theme.secondBlack};
    font-weight: 600;
    font-size: 18px;
  }
`;