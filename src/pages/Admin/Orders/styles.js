import styled from "styled-components";
import Select from 'react-select'

export const ProductImage = styled.img`
height: 75px;
padding: 12px;
border-radius: 16px;

`;

export const SelectOptions = styled(Select)`
`;

export const Filter = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 45px;
padding-bottom: 30px;

`;

export const FilterOptions = styled.button`
font-size: ${(props) => props.$isActiveStatus ? '18px' : '16px'};
font-weight: 600;
cursor: pointer;
background: none;
border: none;
padding-bottom: 3px;
color: ${(props) => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
border-bottom: ${(props) => props.$isActiveStatus ? ` 3px solid ${props.theme.purple}` : 'none'};
transition: color 250ms ease-in-out, scale 250ms ease-in-out;

&:hover{
    color: ${props => props.theme.darkPurple};
    scale: 1.1;
}
`;