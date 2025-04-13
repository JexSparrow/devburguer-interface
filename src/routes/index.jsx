import { Route, Routes } from "react-router-dom";

import { Cart, Login, Register, Home, Menu, EditProducts, NewProducts, AllProducts, Orders } from "../pages";

import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="cardapio" element={<Menu />} />
                <Route path="carrinho" element={<Cart />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/editar-produtos" element={<EditProducts />} />
                <Route path="/admin/novos-produtos" element={<NewProducts />} />
                <Route path="/admin/todos-produtos" element={<AllProducts />} />
            </Route>


        </Routes>
    );
}