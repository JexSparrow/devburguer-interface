import { CartConteiner, Container, Content, HeaderLink, Logout, Navigation, Options, Profile } from "./styles";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/userContext"

export function Header() {

    const navigate = useNavigate();

    const { pathname } = useResolvedPath();

    const { logout, userInfo } = useUser();

    function logoutUser() {

        logout();
        navigate("/login");

    };



    return (
        <Container>
            <Content>

                <Navigation>

                    <HeaderLink to="/" $isActive={pathname === "/"}>Home</HeaderLink>
                    <hr></hr>
                    <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Cardápio</HeaderLink>

                </Navigation>

                <Options>

                    <UserCircle color="#fff" size={36} />

                    <Profile>

                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>


                        </div>
                    </Profile>
                </Options>

                <CartConteiner>
                    <ShoppingCart color="#fff" size={32} />
                    <HeaderLink to="/carrinho">Carrinho</HeaderLink>

                    <Logout onClick={logoutUser}>SAIR</Logout>
                </CartConteiner>
            </Content>

        </Container>
    )
}