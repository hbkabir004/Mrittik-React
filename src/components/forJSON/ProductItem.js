import React from 'react';
import { NavLink } from "react-router-dom";

const ProductItem = ({productItem, handleAddToCart}) => {
    const { id, img, name, badge, newClass, oldClass, price, oldPrice, categoryName } = productItem;

    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={newClass}>{badge}</span>
                    <img className="primary_img" src={img} alt="img" />
                    <div onClick={() => handleAddToCart(productItem)} className="cart_button">
                        <a className="button">
                            Add to Cart
                        </a>
                    </div>
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                        <NavLink to={`/shop-product/${id}`}
                          className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                            <h4 className="product_item_name"><a href="/shop-product">{name}</a>
                                <span className="product_item_price"> <del className={oldClass}>{oldPrice}</del> {price}</span>
                                <span className="product_item_price"></span>
                            </h4>
                        </NavLink>
                        <div className="product_category"><a href="#">{categoryName}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;