import React from 'react';

const SubTotal = ({ product }) => {
    const { name, price, quantity } = product;
    const total = (Number(price) * Number(quantity)).toFixed(2);
    const tax = (Number(total) * 0.1).toFixed(2);
    const subTotal = (Number(total) + Number(tax)).toFixed(2);
    return (
        <li className="totalvalue">
            <span className="text">Subtotal</span> <span className="value">${subTotal}</span>
        </li>
    );
};

export default SubTotal;