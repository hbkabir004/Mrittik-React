import React from 'react';
import CartContent from '../components/CartContent';
import CartHeader from '../components/CartHeader';

const CartContainer = () => {

    return (
        <section className="shopping_cart bg-dark-200">
            <div className="container">
                <form action="checkout.php" method="POST">
                    <table className="cart_table">
                        <CartHeader />
                        {/* 
                        {cart.map(product => (
                            <CartContent
                                key={product.id}
                                product={product}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ))} */}

                        <CartContent title='Traffic Cone' img='images/shop/products/1-1.png' price='15' />
                        <CartContent title='Safty Helmet' img='images/shop/products/2-1.png' price='17' />
                        <CartContent title='Traffic Cone' img='images/shop/products/3-1.png' price='15' />
                        <CartContent title='Safty Helmet' img='images/shop/products/4-1.png' price='17' />
                    </table>
                    <div className="couponcart">
                        <div className="set_coupon">
                            <div className="form-group">
                                <input type="text" className="form-control" name="coupon" placeholder="Coupon Code" />
                            </div>
                            <div className="btn_group">
                                <input className="btn olive" type="submit" value="Apply Coupon" name="submit" />
                            </div>
                        </div>
                        <div className="cartupdate">
                            <div className="btn_group">
                                <input className="btn white" type="submit" value="Update Cart" name="submit" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="grand_total">
                            <h4 className="widget-title">Card Total <span className="title-line"></span></h4>
                            <ul>
                                <li><span className="text">Subtotal</span> <span className="value total_price">$1500</span></li>
                                <li><span className="text">Tax (10%)</span> <span className="value">$150</span></li>
                                <li><span className="text">Shipping</span> <span className="value">Enter your address to view shipping options.
                                    Calculate Shipping</span></li>
                                <li className="totalvalue"><span className="text">Total</span> <span className="value">$1700</span></li>
                            </ul>
                            <form action='/shop-checkout' className="btn_group">
                                <input className="btn white" type="submit" value="Proceed To Checkout" name="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartContainer;