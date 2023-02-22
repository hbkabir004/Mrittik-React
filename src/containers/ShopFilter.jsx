import React from 'react';

const ShopFilter = () => {
    return (
        <div className="shop_filtering_method d-flex align-items-center flex-wrap">
            <div className="view_type_wrapper d-flex align-items-center">
                <ul className="nav view_type d-flex align-items-center">
                    <li>
                        <a className="icon-grid active" id="grid-tab" data-bs-toggle="tab" href="#grid"><i className="bi bi-grid-3x2-gap-fill"></i></a>
                    </li>
                    <li>
                        <a className="icon-list" id="list-tab" data-bs-toggle="tab" href="#list"><i className="bi bi-list-task"></i></a>
                    </li>
                </ul>
                <div className="showing_results">
                    Showing 1-12 of 42 results
                </div>
            </div>
            <div className="sorting_wrapper">
                <div className="sorting_select">
                    <select className="basic_select" id="sorting">
                        <option value="0">Default Sorting</option>
                        <option value="1">Title</option>
                        <option value="2">Price: Low to High</option>
                        <option value="3">Price: High to Low</option>
                        <option value="4">Popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;