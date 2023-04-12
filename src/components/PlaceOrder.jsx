import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../Layouts/ShopLayout';
import OrderListItem from './OrderListItem';
import WidgetTitle from './WidgetTitle';
import { deleteShoppingCart } from './forJSON/fakeDB';

const PlaceOrder = () => {
    const [cart, setCart] = useContext(CartContext);

    let subTotal = 0;
    cart.map(item => {
        subTotal += (Number(item.price) * Number(item.quantity));
    })
    const tax = (Number(subTotal) * 0.1).toFixed(2);
    const grandTotal = (Number(subTotal) + Number(tax)).toFixed(2);

    const orderHandler = () => {
        if (cart.length) {
            setCart([]);
            deleteShoppingCart();
            window.location.href = '/thank-you';
            return toast.success('Order Placed!', { autoClose: 500 })
        }

        return toast.error('Cart is empty', { autoClose: 500 })
    }

    return (
        <div className="place_order">
            <WidgetTitle title='Your Order' className='widget-title' />
            <ul>
                <li className="totalvalue"><span className="text">Product</span> <span className="value">Price</span></li>

                {
                    cart.map(product => <OrderListItem
                        key={product.id}
                        product={product}
                    />)
                }

                <li className="totalvalue"><span className="text">Subtotal</span> <span className="value">${subTotal}</span></li>
                <li className="totalvalue">
                    <span className="text">Shipping</span>
                    <div className="form-group">
                        <label className="radio_circle">Flat Rate
                            <input type="radio" checked="checked" name="shipping" value="cash" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio_circle">Free Shipping
                            <input type="radio" name="shipping" value="card" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio_circle">Local Pickup
                            <input type="radio" name="shipping" value="online" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </li>
                <li className="totalvalue"><span className="text">Total</span> <span className="value">${grandTotal}</span></li>
            </ul>
            <div className="form-group paymentmethod">
                <label className="radio_circle">Direct Bank Transfer
                    <input type="radio" checked="checked" name="paymethod" value="cash" />
                    <span className="checkmark"></span>
                    <span className="text">Make your payment directly into our bank account. Please use your
                        Order ID as the payment reference. Your order will not be shipped
                        until the funds have cleared in our account.</span>
                </label>
                <label className="radio_circle">Check Payment
                    <input type="radio" name="paymethod" value="card" />
                    <span className="checkmark"></span>
                    <span className="text">Your personal data will be used to process your order, support your
                        experience throughout this website, and for other purposes described
                        in our privacy policy.</span>
                </label>
            </div>

            <div className="btn_group">
                <button
                    onClick={orderHandler}
                    type='button'
                    className='btn white'
                >
                    Place Order
                </button>

            </div>
        </div>
    );
};

export default PlaceOrder;