import React from 'react';
import ProductDetails from './ProductDetails';
import ProductView from './ProductView';
import RelatedProducts from './RelatedProducts';

// export const SingleProductContext = createContext();


const ShopContainer04 = ({ selectedProduct }) => {
    // const product = useLoaderData();
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch(`https://mrittik-server.vercel.app/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data));
    // }, [])

    return (
        <main className="wrapper">
            <ProductView productView={selectedProduct} />
            <ProductDetails projectDetails={selectedProduct} />
            <RelatedProducts relatedProducts={selectedProduct} />
        </main >
    );
};

export default ShopContainer04;