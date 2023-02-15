import React from 'react';

const PageHeder = (props) => {
    return (
        <>
            <div className="page_header">
                <div className="page_header_inner">
                    <div className="container">
                        <div className="page_header_content d-flex align-items-center justify-content-between">
                            <h2 className="heading">{props.title}</h2>
                            <ul className="breadcrumb d-flex align-items-center">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="shop-1.html">Shop</a></li>
                                <li className="active">{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-layer-bg"></div>
        </>
    );
};

export default PageHeder;