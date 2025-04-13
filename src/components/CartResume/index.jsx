import { Button } from "../Button";
import { Container, Content, Title } from "./styles";


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useCart } from "../../hooks/cartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/format";

export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const { cartProducts, clearCart } = useCart();

    const navigate = useNavigate();

    useEffect(() => {

        const sumAllItems = cartProducts.reduce((acc, current) => {

            return current.price * current.quantity + acc

        }, 0);

        setFinalPrice(sumAllItems)

    }, [cartProducts]);

    const submitOrder = async () => {
        if (cartProducts.length === 0) {
            toast.error("O carrinho está vazio. Adicione itens antes de enviar o pedido.");
            return;
        }

        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity };
        });

        try {
            const { status } = await api.post('/orders', { products }, {
                validateStatus: () => true,
            });

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                clearCart();
                toast.success('Pedido Enviado! Obrigado');
            } else if (status === 400 || status === 409) {
                toast.error('Algo deu Errado! Pedido não enviado');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('💣 Falha no Sistema! Tente novamente ...');
        }
    };


    return (

        <div>
            <Container>

                <Title>Resumo do Pedido</Title>



                <Content>
                    <p className="Items">Items</p>
                    <p className="Items-Price">{formatPrice(finalPrice)}</p>
                    <p className="Delivery-Tax">Taxa de Entrega</p>
                    <p className="Tax-Price">{formatPrice(deliveryTax)}</p>

                    <p className="Total">Total</p>
                    <p className="Total-Price">{formatPrice(finalPrice + deliveryTax)}</p>
                </Content>

            </Container>

            <Button onClick={() => submitOrder()}>Continuar</Button>
        </div>

    )
}