import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

// export const ShopContext = createContext();
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)


    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                {/* <> */}
                <Header />
                {/* <MiniCart /> */}
                <Outlet />
                <Footer />
                {/* </> */}
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;