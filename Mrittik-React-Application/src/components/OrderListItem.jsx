import React, { createContext } from 'react';

export const TotalContext = createContext();

const OrderListItem = ({ product }) => {
    const { name, price, quantity } = product;
    const total = (Number(price) * Number(quantity));
    // const tax = Number(total) * 0.1;
    // const grandTotal = Number(total) + Number(tax);

    // const info = { tax, grandTotal }

    return (
        // <TotalContext.Provider value={info}>
        <li>
            <span className="text">{name} x {quantity}</span> <span className="value">${total}</span>
        </li>
        // </TotalContext.Provider>
    );
};

export default OrderListItem;