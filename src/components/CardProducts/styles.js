import styled from "styled-components";

export const Conteiner = styled.div`

background-color: #fff;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 20px;
cursor: grab;
box-shadow: rgba(50, 50, 93, 0.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.7) 0px 3px 7px -3px;

border-radius: 28.5px;

position: relative;

div {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: space-between;
    margin-top: 18px;

    p {
        letter-spacing: 1px;
        font-size: 20px;
        color: ${(props) => props.theme.orange};
        line-height: 20px;
        font-weight: 700;
        margin-top: 18px;
    }

    strong {
        font-size: 24px;
        color: ${(props) => props.theme.black};
        font-weight: 800;
    }

    
}
`

export const CardImage = styled.img`
height: 155px;
width: 55%;
position: absolute;
top: -52%;

`

export const Heart = styled.img`

height: 25px;
position: absolute;
right: 6%;
top: 10%;
`

