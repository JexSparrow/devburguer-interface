import { Outlet, Navigate } from "react-router-dom"
import { NavMenu } from "../../components";
import { Conteiner } from "./styles";


export function AdminLayout() {

    const { admin: isAdmin } = JSON.parse(localStorage.getItem('devburguer:userData'));

    return isAdmin ? (
        <Conteiner>

            <NavMenu />

            <main>
                <section>
                    <Outlet />
                </section>

            </main>







        </Conteiner>

    ) : (
        <Navigate to="/login" />
    );

}