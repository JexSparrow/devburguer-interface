import { List, ListPlus, Receipt } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: "Pedidos",
        path: "/admin/pedidos",
        icons: <Receipt />
    },
    {
        id: 2,
        label: "Produtos",
        path: "/admin/todos-produtos",
        icons: <List />
    },
    {
        id: 3,
        label: "Adicionar Produto",
        path: "/admin/novos-produtos",
        icons: <ListPlus />
    },

]