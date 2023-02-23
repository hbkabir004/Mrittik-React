import React from 'react';
import PageBanner02 from '../containers/PageBanner02';
import ShopContainer04 from '../containers/ShopContainer04';

const ShopProduct = () => {
    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Product Details' href="/shop-1" />
            <ShopContainer04 />
        </>
    );
};

export default ShopProduct;