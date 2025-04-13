import PropTypes from "prop-types";
import { CardImage, Conteiner, Heart } from "./styles";
import { CartButton } from "../CartButton";
import s2roxo from "../../assets/s2roxo.svg";
import { formatPrice } from "../../utils/format";

import { useCart } from "../../hooks/cartContext";

export function CardProducts({ product }) {

    const { putProduct } = useCart();

    if (!product || !product.url) {
        return null;
    }

    return (
        <Conteiner>
            <CardImage src={product.url} alt={product.name} />

            <Heart src={s2roxo} alt="like" />

            <div>
                <p>{product.name}</p>
                <strong style={{ color: product.offer ? "#f90040 " : "inherit" }}>
                    {formatPrice(product.price)}
                </strong>
            </div>

            <CartButton onClick={() => putProduct(product)} />
        </Conteiner>
    );
}

CardProducts.propTypes = {
    product: PropTypes.object,
};