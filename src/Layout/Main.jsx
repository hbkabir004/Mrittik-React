import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SectionGridLines from '../components/SectionGridLines';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)


    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header />
                <Outlet />
                <Footer />
                <SectionGridLines />
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;