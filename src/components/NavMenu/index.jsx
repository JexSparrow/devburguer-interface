import { navLinks } from "./navLinks"; // Corrigido a importação
import Logo from "../../assets/Logo.svg";
import { SignOut } from "@phosphor-icons/react";
import { Conteiner, NavLink, NavLinksConteiner, Footer } from "./styles";
// import { useUser } from "../../hooks/userContext";
import { useResolvedPath, useNavigate } from "react-router-dom";

export function NavMenu() {

    const { pathname } = useResolvedPath();

    // const { logout } = useUser();

    const navigate = useNavigate();

    function logoutUser() {

        navigate("/");

    };

    return (
        <Conteiner>
            <img src={Logo} alt="Logo DevBurguer" onClick={logoutUser} />

            <NavLinksConteiner>
                {navLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}>
                        {link.icons}

                        <span>

                            {link.label}

                        </span>

                    </NavLink>
                ))}
            </NavLinksConteiner>

            <Footer>
                <NavLink to="/">
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Conteiner>
    );
}