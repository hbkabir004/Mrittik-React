import React from 'react';
import LoadmoreBtn from '../components/LoadmoreBtn';
import PaginationDiv02 from '../components/PaginationDiv02';
import ProductItem from '../components/ProductItem';

const TabContent = () => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="product_view_type">
                    <div className="product_view_grid product_col_3 type_1">
                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/1-1.png' name='Decor Plant' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' class='d-none' img='images/shop/products/2-1.png' name='Hanging Light' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='old_price' oldPrice='$19.00' class='badge-sale' badge='Sale' img='images/shop/products/3-1.png' name='Green Armchair' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' oldPrice='$19.00' class='d-none' badge='Sale' img='images/shop/products/4-1.png' name='Brown Table Lamp' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/5-1.png' name='Wooden Center Table' price='$15.00' category='Decoration' />


                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <img className="primary_img" src="images/shop/products/6-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Snake Plant</a> <span className="product_item_price"><del className="old_price">$23.00</del> $19.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <img className="primary_img" src="images/shop/products/7-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Center Table</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <img className="primary_img" src="images/shop/products/8-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Alarm Clock</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <span className="badge-sale">Sale</span>
                                    <img className="primary_img" src="images/shop/products/9-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Black Vase</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <span className="badge-new">New</span>
                                    <img className="primary_img" src="images/shop/products/10-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">White Armchair</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <span className="badge-new">New</span>
                                    <img className="primary_img" src="images/shop/products/11-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Teal Rug</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product_item">
                            <div className="product_thumb">
                                <div className="product_imagebox">
                                    <span className="badge-sale">Sale</span>
                                    <img className="primary_img" src="images/shop/products/12-1.png" alt="img" />
                                    <div className="cart_button">
                                        <a href="#" className="button">
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_item_inner">
                                    <div className="label_text">
                                        <h4 className="product_item_name"><a href="shop-product.html">Plant With Stand</a> <span className="product_item_price">$15.00</span></h4>
                                        <div className="product_category"><a href="#">Decoration</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <PaginationDiv02 />
                </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                <div className="product_view_list">
                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/1-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Decor Plant</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <img className="primary_img" src="images/shop/products/2-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Hanging Light</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-sale">Sale</span>
                                <img className="primary_img" src="images/shop/products/3-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Green Armchair</a> <span className="product_item_price"> <del className="old_price">$19.00</del> $15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/4-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Brown Table Lamp</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/5-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Wooden Center Table</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/6-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Snake Plant</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/7-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Center Table</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/8-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Alarm Clock</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/9-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Black Vase</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/10-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">White Armchair</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/11-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Teal Rug</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_item">
                        <div className="product_thumb">
                            <div className="product_imagebox">
                                <span className="badge-new">New</span>
                                <img className="primary_img" src="images/shop/products/12-1.png" alt="img" />
                            </div>
                            <div className="product_item_inner">
                                <div className="label_text">
                                    <h4 className="product_item_name"><a href="shop-product.html">Plant With Stand</a> <span className="product_item_price">$15.00</span></h4>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                            <li><i className="bi bi-star-fill"></i></li>
                                        </ul>
                                    </div>
                                    <div className="cart_button">
                                        <a href="#" className="button">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <LoadmoreBtn className='btn olive w-100' text='Discover All Products' />

                </div>
            </div>
        </div>
    );
};

export default TabContent;