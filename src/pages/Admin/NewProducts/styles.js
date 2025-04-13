import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components/Button";

export const ContainerBox = styled.div`
    height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${props => props.theme.black};
  padding: 20px;
  border-radius: 15px;
  width: 35%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
    font-size: 18px;
  color: ${props => props.theme.white};
  font-weight: bold;

  margin-bottom: 5px;
`;

export const Input = styled.input`
 font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  height: 50px;
`;

export const LabelUpload = styled.label`
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.white};
  padding: 10px;
  border: 2px dashed #fff;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;

  input {
    display: none; // Esconde o input padrão
  }
`;

export const Select = styled(ReactSelect)`
 
`;

export const SubmitButton = styled(Button)`
  background-color: ${props => props.theme.purple};
  color: white;
  font-size: 26px;
  height: 52px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`

color: ${props => props.theme.red};
line-height: 20px;
margin-top: 5px;

`;