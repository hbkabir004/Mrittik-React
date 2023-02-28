import React, { useState } from 'react';

const CartContent = ({ product, handleRemoveItem }) => {
    const { id, img, title, name, price, quantity } = product;
    const total = (Number(price) * Number(quantity));

    let [count, setCount] = useState(quantity);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <tr className="cart_content">
            <td className="cart_image"><img src={img} alt="img" /></td>
            <td className="cart_title">{title}</td>
            <td className="cart_price">$<span className="product_per_price" data-price="15">{price}</span></td>
            <td className="cart_quantity">
                <div className="product_quantity_inner">
                    <span className="qty_btn product_quantity_subtract">
                        <i onClick={decrement} className="bi bi-dash-lg"></i>
                    </span>
                    <input type="text" id="product_quantity_input" placeholder="0" value={count} />
                    <span className="qty_btn product_quantity_add">
                        <i onClick={increment} className="bi bi-plus-lg"></i>
                    </span>
                </div>
            </td>
            <td className="cart_total">$<span className="product_total_price">{total}</span></td>
            <td onClick={() => handleRemoveItem(id)} className="cart_removal"><a href="#"><i className="bi bi-x-lg"></i></a></td>
        </tr>

    );
};

export default CartContent;