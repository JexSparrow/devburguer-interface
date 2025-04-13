import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Conteiner, Title } from './styles';
import { CardProducts } from '../CardProducts'

export function OffersCarousel() {

    const [offers, setOffers] = useState([]);

    useEffect(() => {

        async function loadProducts() {

            const { data } = await api.get('/products-file');

            const onlyOffers = data.filter(product => product.offer)

            setOffers(onlyOffers);

        }



        loadProducts();

    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Conteiner>
            <Title>Ofertas do Dia</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            >
                {offers.map((product) => (

                    <CardProducts key={product.id} product={product} />

                ))}

            </Carousel>

        </Conteiner>

    );
}