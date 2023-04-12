import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import CartContent from '../components/CartContent';
import CartHeader from '../components/CartHeader';
import CuponCode from '../components/CuponCode';
import { deleteShoppingCart, removeFromDb } from '../components/forJSON/fakeDB';
import GrandTotal from '../components/forJSON/GrandTotal';
import { CartContext } from '../Layouts/ShopLayout';

const CartContainer = () => {
    const [cart, setCart] = useContext(CartContext)

    const handleRemoveItem = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
        toast.warning('Product Removed!', { autoClose: 500 })
    }

    let total = 0

    for (const product of cart) {
        total = total + product.price * product.quantity
    }

    const orderHandler = () => {
        if (cart.length) {
            setCart([])
            deleteShoppingCart()
            return toast.success('Order Placed!', { autoClose: 500 })
        }

        return toast.error('Cart is empty', { autoClose: 500 })
    }

    return (
        <section className="shopping_cart bg-dark-200">
            <div className="container">
                <form action="checkout.php" method="POST">
                    <table className="cart_table">
                        <CartHeader />

                        {cart.map(product => (
                            <CartContent
                                key={product.id}
                                product={product}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ))}

                    </table>

                    <CuponCode />
                </form>
                <div className="row">
                    <div className="col-lg-7">
                        <GrandTotal total={total} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartContainer;