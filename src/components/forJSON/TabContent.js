import React, { createContext, useEffect, useState } from 'react';
import LoadmoreBtn from '../../components/LoadmoreBtn';
import PaginationDiv02 from '../../components/PaginationDiv02';
import ListProductItem from './ListProductItem';
import ProductItem from './ProductItem';

export const ProductContext = createContext();

const TabContent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mrittik-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="tab-content">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="product_view_type">
                    <div className="product_view_grid product_col_3 type_1">
                        <ProductContext.Provider value={products}>
                        {
                            products.map(product => <ProductItem
                                key={product.id}
                                productItem={product}
                            ></ProductItem>)
                        }
                        </ProductContext.Provider>

                    </div>

                    <PaginationDiv02 />
                </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                <div className="product_view_list">
                    <ProductContext.Provider value={products}>
                    {
                        products.map(product => <ListProductItem
                            key={product.id}
                            productItem={product}
                        ></ListProductItem>)
                    }
                    </ProductContext.Provider>
                    
                    <LoadmoreBtn className='btn olive w-100' text='Discover All Products' />

                </div>
            </div>
        </div>
    );
};

export default TabContent;