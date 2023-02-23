import React, { useEffect } from 'react';
import Swiper from 'swiper';

const RelatedProducts = () => {
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
                            <div class="swiper-slide">
                                <div class="product_item">
                                    <div class="product_thumb">
                                        <div class="product_imagebox">
                                            <span class="badge-new">New</span>
                                            <img class="primary_img" src="images/shop/products/1-1.png" alt="img" />
                                            <div class="cart_button">
                                                <a href="#" class="button">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product_item_inner">
                                            <div class="label_text">
                                                <h4 class="product_item_name"><a href="shop-product.html">Decor Plant</a> <span class="product_item_price">$15.00</span></h4>
                                                <div class="product_category"><a href="#">Decoration</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="product_item">
                                    <div class="product_thumb">
                                        <div class="product_imagebox">
                                            <img class="primary_img" src="images/shop/products/2-1.png" alt="img" />
                                            <div class="cart_button">
                                                <a href="#" class="button">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product_item_inner">
                                            <div class="label_text">
                                                <h4 class="product_item_name"><a href="shop-product.html">Hanging Light</a> <span class="product_item_price">$15.00</span></h4>
                                                <div class="product_category"><a href="#">Decoration</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="product_item">
                                    <div class="product_thumb">
                                        <div class="product_imagebox">
                                            <span class="badge-sale">Sale</span>
                                            <img class="primary_img" src="images/shop/products/3-1.png" alt="img" />
                                            <div class="cart_button">
                                                <a href="#" class="button">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product_item_inner">
                                            <div class="label_text">
                                                <h4 class="product_item_name"><a href="shop-product.html">Green Armchair</a> <span class="product_item_price"> <del class="old_price">$19.00</del> $15.00</span></h4>
                                                <div class="product_category"><a href="#">Decoration</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="product_item">
                                    <div class="product_thumb">
                                        <div class="product_imagebox">
                                            <img class="primary_img" src="images/shop/products/4-1.png" alt="img" />
                                            <div class="cart_button">
                                                <a href="#" class="button">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product_item_inner">
                                            <div class="label_text">
                                                <h4 class="product_item_name"><a href="shop-product.html">Brown Table Lamp</a> <span class="product_item_price">$15.00</span></h4>
                                                <div class="product_category"><a href="#">Decoration</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="product_item">
                                    <div class="product_thumb">
                                        <div class="product_imagebox">
                                            <span class="badge-new">New</span>
                                            <img class="primary_img" src="images/shop/products/5-1.png" alt="img" />
                                            <div class="cart_button">
                                                <a href="#" class="button">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product_item_inner">
                                            <div class="label_text">
                                                <h4 class="product_item_name"><a href="shop-product.html">Wooden Center Table</a> <span class="product_item_price">$15.00</span></h4>
                                                <div class="product_category"><a href="#">Decoration</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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