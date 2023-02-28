import React from 'react';

const SubTotal = ({ product }) => {
    const { name, price, quantity } = product;
    const total = (Number(price) * Number(quantity)).toFixed(2);
    const tax = (Number(total) * 0.1).toFixed(2);
    const subTotal = (Number(total) + Number(tax)).toFixed(2);
    return (
        <li class="totalvalue">
            <span class="text">Subtotal</span> <span class="value">${subTotal}</span>
        </li>
    );
};

export default SubTotal;