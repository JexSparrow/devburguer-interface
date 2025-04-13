import { useEffect, useState } from "react";
import { Conteiner, Banner, CategoriesMenu, ProductsConteiner, ConteinerGrid, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { CardProducts } from "../../components/CardProducts";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {

        const categoryId = +queryParams.get('categoria');

        if (categoryId) {
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories-file');
            const newCategories = [{ id: 0, name: "Todas" }, ...data];
            setCategories(newCategories);
        }
        async function loadProducts() {
            const { data } = await api.get('/products-file');
            const newProducts = data.map((product) => ({ ...product }));
            setProducts(newProducts);
        }
        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory,
            );
            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    return (
        <Conteiner>
            <Banner>
                <h1>O MELHOR<br />HAMBÚRGUER<br />ESTÁ AQUI!<span>Este cardápio está irresistível</span></h1>
            </Banner>
            <ConteinerGrid>
                <CategoriesMenu>
                    {categories.map((category) => (
                        <CategoryButton
                            key={category.id}
                            $isActiveCategory={category.id === activeCategory}
                            to={{
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`,
                            }}
                            replace
                            onClick={() => {

                                setActiveCategory(category.id);


                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoriesMenu>
                <ProductsConteiner>
                    {filteredProducts.map(product => (
                        <CardProducts product={product} key={product.id} />
                    ))}
                </ProductsConteiner>
            </ConteinerGrid>
        </Conteiner >
    );
}

// import { useEffect, useState } from "react";
// import { Conteiner, Banner, CategoriesMenu, ProductsConteiner, ConteinerGrid, CategoryButton } from "./styles";
// import { api } from "../../services/api";
// import { CardProducts } from "../../components/CardProducts";
// import { useLocation, useNavigate } from "react-router-dom";

// export function Menu() {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     const navigate = useNavigate();
//     const { search } = useLocation();
//     const queryParams = new URLSearchParams(search);

//     const [activeCategory, setActiveCategory] = useState(() => {
//         const categoryId = +queryParams.get('categoria');
//         return categoryId || 0; // Retorna categoryId se existir, senão 0
//     });

//     useEffect(() => {
//         async function loadCategories() {
//             const { data } = await api.get('/categories-file');
//             const newCategories = [{ id: 0, name: "Todas" }, ...data];
//             setCategories(newCategories);
//         }
//         async function loadProducts() {
//             const { data } = await api.get('/products-file');
//             const newProducts = data.map((product) => ({ ...product }));
//             setProducts(newProducts);
//         }
//         loadCategories();
//         loadProducts();
//     }, []);

//     useEffect(() => {
//         if (activeCategory === 0) {
//             setFilteredProducts(products);
//         } else {
//             const newFilteredProducts = products.filter(
//                 (product) => product.category_id === activeCategory,
//             );
//             setFilteredProducts(newFilteredProducts);
//         }
//     }, [products, activeCategory]);

//     // Este useEffect agora atualiza a URL quando activeCategory muda (exceto na inicialização)
//     useEffect(() => {
//         if (queryParams.get('categoria') !== String(activeCategory)) {
//             navigate({
//                 pathname: '/cardapio',
//                 search: activeCategory !== 0 ? `?categoria=${activeCategory}` : '',
//             }, { replace: true });
//         }
//     }, [activeCategory, navigate, queryParams]);

//     return (
//         <Conteiner>
//             <Banner>
//                 <h1>O MELHOR<br />HAMBÚRGUER<br />ESTÁ AQUI!<span>Este cardápio está irresistível</span></h1>
//             </Banner>
//             <ConteinerGrid>
//                 <CategoriesMenu>
//                     {categories.map((category) => (
//                         <CategoryButton
//                             key={category.id}
//                             $isActiveCategory={category.id === activeCategory}
//                             onClick={() => {
//                                 setActiveCategory(category.id);
//                                 console.log("Categoria Ativa:", category.id);
//                             }}
//                         >
//                             {category.name}
//                         </CategoryButton>
//                     ))}
//                 </CategoriesMenu>
//                 <ProductsConteiner>
//                     {filteredProducts.map(product => (
//                         <CardProducts product={product} key={product.id} />
//                     ))}
//                 </ProductsConteiner>
//             </ConteinerGrid>
//         </Conteiner >
//     );
// }

// CÓDIGO GPT