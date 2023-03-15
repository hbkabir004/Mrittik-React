import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { addToDb } from '../components/forJSON/fakeDB';
import ProductZoomInfo from '../components/ProductZoomInfo';
import { CartContext } from '../Layout/ShopLayout';
import ProductZoomBtnGrp from './ProductZoomBtnGrp';

const ProductView = ({ productView }) => {
    const { img, name, oldClass, price, oldPrice, categoryName } = productView;

    const [cart, setCart] = useContext(CartContext);

    let [count, setCount] = useState(1);
    // let total = price;
    const total = (Number(price) * Number(count));

    console.log(price);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const handleAddToCart = productView => {
        let newCart = []
        const exists = cart.find(
            existingProduct => existingProduct.id === productView.id
        )
        if (!exists) {
            productView.quantity = 1
            newCart = [...cart, productView]
        } else {
            const rest = cart.filter(
                existingProduct => existingProduct.id !== productView.id
            )
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(productView.id)
        toast.info('Info: Product Added!', { autoClose: 500 });
    }

    return (
        <section clasNames="product_view bg-dark-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 pe-lg-5">
                        <div className="product_left">
                            <div className="product_zoom">
                                <ProductZoomBtnGrp bgImg1={img} bgImg2={img} bgImg3={img} bgImg4={img} />

                                <div className="product_zoom_container">
                                    <ProductZoomInfo img={img} />
                                    <ProductZoomInfo img={img} />
                                    <ProductZoomInfo img={img} />
                                    <ProductZoomInfo img={img} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-0 pe-lg-5">
                        <div className="product_right">
                            <div className="product_info">
                                <div className="product_title"><h2>{name}</h2></div>
                                <div className="product_rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                    <i className="bi bi-star"></i>
                                    <div className="product_rating_details">(35 Customer Reviews)</div>
                                </div>
                            </div>
                            <div className="product_price">
                                <span className="product_item_price"> <del className={oldClass}>{oldPrice}</del>${total}</span>
                                <span className="product_item_price"></span>
                            </div>
                            <div className="product_description">
                                Ut enim ad minima veniam, quis nostrum exercitationem corporis commosequatur? Quis autem vel eum iure veniam, quis nostrum sequatur? Quis autem vel eum iure...
                            </div>
                            <div className="product_view_bottom">
                                <div className="product_quantity">
                                    <div className="pproduct_quantity_label">Quantity</div>
                                    <div className="product_quantity_inner">
                                        <span className="qty_btn product_quantity_subtract">
                                            <i onClick={decrement} className="bi bi-dash-lg"></i>
                                        </span>
                                        <input type="text" className="quantity" id="product_quantity_input" placeholder="0" value={count} />
                                        <span className="qty_btn product_quantity_add">
                                            <i onClick={increment} className="bi bi-plus-lg"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="wish_button">
                                    <a href="#"><i className="bi bi-heart"></i></a>
                                </div>
                                <div className="compare_button">
                                    <a href="#"><i className="bi bi-bar-chart-line"></i></a>
                                </div>
                            </div>

                            <div className="cart_button d-flex justify-content-start gap-3">
                                <Link ><button onClick={() => handleAddToCart(productView)} className="button">Add to Cart</button>
                                </Link>
                                <Link to="/shop-checkout" ><button className="button">Buy Now</button></Link>
                            </div>

                            <div className="product_view_bottom_credential">
                                <ul className="px-0 mb-0">
                                    <li className="categories"><span>Category:</span> <a href="#">{categoryName}</a></li>
                                    <li className="sku"><span>SKU:</span> 07</li>
                                    <li className="tags"><span>Tags:</span> <a href="#">Wooden</a> <a href="#">Armchair</a> <a href="#">Sofa</a></li>
                                </ul>
                            </div>
                            <div className="product_social_share">
                                <ul>
                                    <li className="label_text">Share:</li>
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                    <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductView;