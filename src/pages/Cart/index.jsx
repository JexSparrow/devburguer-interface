import Logo from "../../assets/Logo.svg"
import { CartItems, CartResume } from "../../components/index";
import { Banner, Conteiner, Content, Title } from "./styles";

export function Cart() {
    return (
        <Conteiner>
            <Banner>
                <img src={Logo} />

            </Banner>

            <Title>Checkout - Pedido</Title>

            <Content>
                <CartItems />
                <CartResume />
            </Content>

        </Conteiner>

    )
}