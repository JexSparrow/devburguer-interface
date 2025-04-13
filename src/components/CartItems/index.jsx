import { Table } from "../index";
import { useCart } from "../../hooks/cartContext";
import { formatPrice } from "../../utils/format";
import { ButtonGroup, ProductImage, Buttons, Trash, EmptyCart } from "./styles";
import trash from "../../assets/trash.svg"
import { ShoppingCart } from "@phosphor-icons/react";

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Items</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quatidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} height={120} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{formatPrice(product.price)}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <Buttons onClick={() => decreaseProduct(product.id)} >
                                        -
                                    </Buttons>
                                    {product.quantity}
                                    <Buttons onClick={() => increaseProduct(product.id)} $increase={true}>
                                        +
                                    </Buttons>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>{formatPrice(product.quantity * product.price)}</Table.Td>
                            <Table.Td>

                                <Trash src={trash} alt="Lixeira" onClick={() => deleteProduct(product.id)} />


                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <EmptyCart>
                        <ShoppingCart color="#fff" size={56} weight="duotone" />
                        <p>Carrinho Vazio!</p>
                    </EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    );
}