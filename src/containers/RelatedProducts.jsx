import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import RelatedProduct from '../components/forJSON/RelatedProduct';

const RelatedProducts = ({ relatedProducts }) => {
    const { categoryID } = relatedProducts;

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://mrittik-server.vercel.app/products/category/${categoryID}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // console.log(products);
    useEffect(() => {
        // Related Products
        var swipert10 = new Swiper('.swiper_related_products', {
            slidesPerView: '3',
            centeredSlides: false,
            speed: 1400,
            spaceBetween: 65,
            parallax: true,
            autHeight: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },

            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
            }
        });
    }, []);
    return (
        <section class="related_products bg-dark-200">
            <div class="container">
                <h4 class="widget-title">Related Items <span class="title-line"></span></h4>
                <div class="product_view_grid type_1">
                    <div class="swiper swiper_related_products">
                        <div class="swiper-wrapper">
                            {/* <ProductContext.Provider value={products}> */}
                            {
                                products.map(product => <RelatedProduct
                                    key={product.id}
                                    relatedProduct={product}
                                ></RelatedProduct>)
                            }

                            {/* </ProductContext.Provider> */}

                        </div>
                        {/* <!-- Add Pagination --> */}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;