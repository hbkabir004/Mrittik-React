import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner02 from '../containers/PageBanner02';
import ShopContainer04 from '../containers/ShopContainer04';

export const SingleProductContext = createContext();


const ShopProduct = () => {
    const selectedProduct = useLoaderData();
    return (
        <SingleProductContext.Provider value={selectedProduct}>
            <PageBanner02 title="Shop" page="Shop" activePage='Product Details' href="/shop-1" />
            <ShopContainer04 product={selectedProduct} />
        </SingleProductContext.Provider>
    );
};

export default ShopProduct;