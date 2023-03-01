import CheckoutForm from "../components/CheckoutForm";
import PlaceOrder from "../components/PlaceOrder";
import WidgetTitle from "../components/WidgetTitle";

const Checkout = () => {
    return (
        <section class="shopping_cart bg-dark-200">
            <div class="container">
                <div class="shipping_form">
                    <form>
                        <div class="have_coupon">
                            <div class="form-group">
                                <label for="couponcode">Have a coupon?</label>
                                <input type="text" class="form-control" id="couponcode" name="couponcode" placeholder="Enter Coupon Code" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7 pe-5">
                                <WidgetTitle title='Billing Address' className='widget-title' />
                                <CheckoutForm />
                            </div>
                            <div class="col-lg-5">
                                <PlaceOrder />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;