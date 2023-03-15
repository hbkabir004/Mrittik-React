import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SectionGridLines from '../components/SectionGridLines';
import Footer from '../Pages/Shared/Footer';
import ShopHeader from '../Pages/Shared/ShopHeader';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const ShopLayout = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)


    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <ShopHeader />
                <Outlet />
                <Footer />
                <SectionGridLines />
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default ShopLayout;