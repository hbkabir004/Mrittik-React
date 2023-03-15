import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import { removeFromDb } from '../../../components/forJSON/fakeDB';
import { CartContext } from '../../../Layout/ShopLayout';
import "./MiniCart.css";
import MiniCartContent from './MiniCartContent';

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
        <div className="bg-dark offcanvas offcanvas-end" tabIndex="-1" id={props.id} aria-labelledby="offcanvasNavbarLabel">
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
                    <div className="row gutter-0">
                        <div className="cart_button d-flex justify-content-center">
                            <NavLink to="/shop-cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            ><button className="button me-3">View Cart</button></NavLink>
                            <NavLink to="/shop-checkout"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            ><button className="button">Check Out</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiniCart;