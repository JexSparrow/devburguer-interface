import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(235, 230, 238, 0.85);
  border-radius: 20px;
`;

export const Header = styled.thead`
  background-color: ${(props) => props.theme.black};
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  font-size: 18px;
  text-align: left;
  color: #fff;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 600;
  line-height: 115%;
  font-size: 20px;

  &:last-child {
    font-size: 22px;
    color: rgb(124, 73, 137);
    font-weight: 700;
  }
`;

export const Body = styled.tbody``;