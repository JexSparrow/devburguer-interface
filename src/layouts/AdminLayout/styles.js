import styled from "styled-components";

export const Conteiner = styled.div`

display: grid;
grid-template-columns: minmax(220px,280px) 1fr;

main {

    display: flex;
    flex-direction: column;
    flex: 1; // todo espaço disponível
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.lightGray};
    overflow-y: auto;

}

section {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 1200px;
    width: 100%;

};







`;
