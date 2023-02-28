import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({product}) => {
    const { id, img, name, badge, newClass, oldClass, price, oldPrice, categoryName } = product;

    return (
        <div class="swiper-slide">
            <div className="product_item">
                <div className="product_thumb">
                    <div className="product_imagebox">
                        <span className={newClass}>{badge}</span>
                        <img className="primary_img" src={img} alt="img" />
                        <div className="cart_button">
                            <a href="#" className="button">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <div className="product_item_inner">
                        <div className="label_text">
                            <Link to={`/shop-product/${id}`}><h4 className="product_item_name"><a href="/shop-product">{name}</a>
                                <span className="product_item_price"> <del className={oldClass}>{oldPrice}</del> {price}</span>
                                <span className="product_item_price"></span>
                            </h4></Link>
                            <div className="product_category"><a href="#">{categoryName}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProduct;