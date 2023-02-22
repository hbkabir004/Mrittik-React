import React from 'react';

const CategoryItem = ({ categoryItem }) => {
    const { id, room, href, item1, item2, item3 } = categoryItem;

    return (
        <li className="category_item">
            <div className="category_item_inner">
                <div className="cat_name"><a href="#">{room}</a></div>
                <span className="cat_toggler">
                    <a data-bs-toggle="collapse" href={href}>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </span>
            </div>
            <ul id={id} className="child_category collapse">
                <li>
                    <div className="cat_name"><a href="#">{item1}</a></div>
                </li>
                <li>
                    <div className="cat_name"><a href="#">{item2}</a></div>
                </li>
                <li>
                    <div className="cat_name"><a href="#">{item3}</a></div>
                </li>
            </ul>
        </li>
    );
};

export default CategoryItem;