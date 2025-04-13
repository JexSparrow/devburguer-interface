import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Conteiner, ProductImage, EditButton } from "./styled";
import { formatPrice } from "../../../utils/format";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckCircle, PencilSimple, XCircle } from "@phosphor-icons/react";



export function AllProducts() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function loadProducts() {
            const { data } = await api.get('/products-file');

            setProducts(data);

        }

        loadProducts();

    }, [])

    function isOffer(offer) {
        if (offer) {
            return <CheckCircle color="green" size={24} />
        } else {
            return <XCircle color="red" size={24} />
        }
    };

    function editProduct(product) {
        console.log("Dados do produto:", product);
        console.log("Navegando para:", "/admin/editar-produtos", { state: { product } });

        try {
            navigate("/admin/editar-produtos", { state: { product } });
        } catch (error) {
            toast.error("Erro ao editar produto. Tente novamente.");
            console.error("Erro ao navegar:", error);
        }
    };

    return (
        <Conteiner>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell align="center">Editar Prdoduto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center"><ProductImage src={product.url} /></TableCell>

                                <TableCell align="center">
                                    <EditButton onClick={() => editProduct(product)}>
                                        <PencilSimple />
                                    </EditButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Conteiner>
    )
}