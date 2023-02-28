import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../Layout/Main';
import { deleteShoppingCart } from './forJSON/fakeDB';
import OrderListItem from './OrderListItem';
import WidgetTitle from './WidgetTitle';

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
            setCart([])
            deleteShoppingCart()
            return toast.success('Order Placed!', { autoClose: 500 })
        }

        return toast.error('Cart is empty', { autoClose: 500 })
    }

    return (
        <div class="place_order">
            <WidgetTitle title='Your Order' />
            <ul>
                <li class="totalvalue"><span class="text">Product</span> <span class="value">Price</span></li>

                {
                    cart.map(product => <OrderListItem
                        key={product.id}
                        product={product}
                    />)
                }

                <li class="totalvalue"><span class="text">Subtotal</span> <span class="value">${subTotal}</span></li>
                <li class="totalvalue">
                    <span class="text">Shipping</span>
                    <div class="form-group">
                        <label class="radio_circle">Flat Rate
                            <input type="radio" checked="checked" name="shipping" value="cash" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio_circle">Free Shipping
                            <input type="radio" name="shipping" value="card" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio_circle">Local Pickup
                            <input type="radio" name="shipping" value="online" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </li>
                <li class="totalvalue"><span class="text">Total</span> <span class="value">${grandTotal}</span></li>
            </ul>
            <div class="form-group paymentmethod">
                <label class="radio_circle">Direct Bank Transfer
                    <input type="radio" checked="checked" name="paymethod" value="cash" />
                    <span class="checkmark"></span>
                    <span class="text">Make your payment directly into our bank account. Please use your
                        Order ID as the payment reference. Your order will not be shipped
                        until the funds have cleared in our account.</span>
                </label>
                <label class="radio_circle">Check Payment
                    <input type="radio" name="paymethod" value="card" />
                    <span class="checkmark"></span>
                    <span class="text">Your personal data will be used to process your order, support your
                        experience throughout this website, and for other purposes described
                        in our privacy policy.</span>
                </label>
            </div>

            <div class="btn_group">
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