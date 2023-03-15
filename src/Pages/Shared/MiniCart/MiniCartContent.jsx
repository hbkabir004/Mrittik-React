import React from 'react';

const MiniCartContent = ({ product, handleRemoveItem }) => {
    const { id, img, title, name, price, quantity, categoryName } = product;
    const total = (Number(price) * Number(quantity));
    return (
        <>
            <div className="col-12">
                <div className="cart-item cart-item-sm">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="media media-product">
                                <a href="#!"><img src={img} alt="Image" /></a>
                                <div className="media-body">
                                    <h5 className="media-title">{name} x    {quantity}</h5>
                                    {/* <span className="media-subtitle">{categoryName}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center text-lg-right">
                            <span className="cart-item-price">${total}</span>
                        </div>
                        <a onClick={() => handleRemoveItem(id)} href="#!" className="cart-item-close"><i className="bi bi-x"></i></a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default MiniCartContent;