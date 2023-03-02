import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../assets/css/MiniCart.css";
import { removeFromDb } from '../components/forJSON/fakeDB';
import MiniCartContent from '../components/MiniCartContent';
import { CartContext } from '../Layout/Main';

const MiniCart = (props) => {
    const [cart, setCart] = useContext(CartContext);

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


    return (
        <>
            {/* <button className="navbar-toggler me-3 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
            >
                <span className="bi bi-cart-dash-fill" />
                <p className='position-absolute top-0 start-100 translate-middle rounded-circle cart-length-bg'>{cart.length}</p>


            </button> */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id={props.id} aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row gutter-3">
                        {cart.map(product => (
                            <MiniCartContent
                                key={product.id}
                                product={product}
                                handleRemoveItem={handleRemoveItem}
                            />
                        ))}

                    </div>
                    <div className="container mt-5">
                        {/* <hr /> */}
                        <div className="row gutter-0">
                            <div className="cart_button d-flex justify-content-center">
                                <Link to="/shop-cart"><button className="button me-3">View Cart</button></Link>

                                <Link to="/shop-checkout" ><button className="button">Check Out</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MiniCart;