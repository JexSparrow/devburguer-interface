import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: #1D1E1F;
    height: 9vh;
    width: 100%;
    
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 76px;
    height: 100%;
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 36px;
    align-items: center;

    hr {
        height: 42px;
        margin: auto 0;
        border: 1px solid #fff;
    }
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive
        ? props.theme.green
        : props.theme.white};
    
    border-bottom: ${props => props.$isActive
        ? `2px solid ${props.theme.green}`
        : 'none'};

    padding-bottom: 2px;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition: 300ms ease-in-out;
   

    &:hover {
        color: ${(props) => props.theme.purple};
        scale: calc(1.1);
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
        font-size: 20px;
        color: #fff;
    }

    span {
        font-size: 24px;
        color: ${(props) => props.theme.purple};
        font-weight: 600;
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logout = styled.button`
    font-size: 18px;
    background: transparent;
    border: none;
    color: #ff0000;
    font-weight: 500;
    transition: 300ms ease-in-out;
    margin-left: 42px;

    &:hover {
        scale: calc(1.2);
        padding-bottom: 10px;
    }
`;

export const CartConteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;