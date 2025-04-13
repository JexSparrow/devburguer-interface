import { useContext, createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const putProduct = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts;
            newProductsInCart[cartIndex].quantity = newProductsInCart[cartIndex].quantity + 1;
            toast.success(`${product.name} adicionado ao carrinho! Quantidade atualizada.`); // Toast para atualização de quantidade
        } else {
            product.quantity = 1;
            newProductsInCart = [...cartProducts, product];
            toast.success(`${product.name} adicionado ao carrinho!`); // Toast para adição de novo item
        }

        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {

        setCartProducts([]);
        updateLocalStorage([]);

    };

    const deleteProduct = (productId) => {

        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartProducts(newCart);
        updateLocalStorage(newCart);

    };

    const increaseProduct = (productId) => {

        const newCart = cartProducts.map(prd => {

            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        })

        setCartProducts(newCart);
        updateLocalStorage(newCart);

    };

    const decreaseProduct = (productId) => {

        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(prd => {

                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);

        } else {

            deleteProduct({ id: productId });
        }

    };

    const updateLocalStorage = (product) => {

        localStorage.setItem('devburguer:cartInfo', JSON.stringify(product));
    };

    useEffect(() => {

        const clientCartData = localStorage.getItem('devburguer:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }

    }, [])



    return (

        <CartContext.Provider value={{ cartProducts, putProduct, clearCart, increaseProduct, decreaseProduct, deleteProduct }}>
            {children}
        </CartContext.Provider>

    )
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used with a context")
    }

    return context
}