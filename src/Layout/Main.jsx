import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

// export const ShopContext = createContext();
// export const CartContext = createContext([]);

const Main = () => {
    // const { allProducts, initialCart } = useLoaderData([]);
    // // const [cart, setCart] = useState(initialCart);

    return (
        // <ProductContext.Provider value={allProducts}>
        //     <CartContext.Provider value={[cart, setCart]}>
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
        //     </CartContext.Provider>
        // </ProductContext.Provider>
    );
};

export default Main;