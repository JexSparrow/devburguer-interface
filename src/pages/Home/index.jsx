import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Banner, Conteiner } from "./styles";

export function Home() {

    return (
        <main>
            <Banner>
                <h1>Seja Bem Vindo(a)!</h1>
            </Banner>

            <Conteiner>


                <CategoriesCarousel></CategoriesCarousel>
                <OffersCarousel></OffersCarousel>

            </Conteiner>
        </main>
    )
}