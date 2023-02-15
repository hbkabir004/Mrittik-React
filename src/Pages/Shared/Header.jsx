import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_inner d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <a href="index.html" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                            <a href="index.html" className="dark_logo"><img src="images/logo-dark.svg" alt="logo" /></a>
                        </div>


                        <div className="mainnav d-none d-lg-block">
                            <ul className="main_menu">
                                <li className="menu-item menu-item-has-children active"><a href="index.html">Home</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item active"><a href="index.html">Home One</a></li>
                                        <li className="menu-item"><a href="index-2.html">Home Two</a></li>
                                        <li className="menu-item"><a href="index-3.html">Home Three</a></li>
                                        <li className="menu-item"><a href="index-4.html">Home Four</a></li>
                                        <li className="menu-item"><a href="index-5.html">Home Five</a></li>
                                        <li className="menu-item"><a href="index-6.html">Home Six</a></li>
                                        <li className="menu-item"><a href="index-7.html">Home Seven</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a>Gallery</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="project-1.html">Projects One</a></li>
                                        <li className="menu-item"><a href="project-2.html">Projects Two</a></li>
                                        <li className="menu-item"><a href="project-3.html">Peojects Three</a></li>
                                        <li className="menu-item"><a href="project-details.html">Peoject Details</a></li>
                                        <li className="menu-item"><a href="project-details-2.html">Peoject Details Two</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a>Pages</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="about.html">About Us</a></li>
                                        <li className="menu-item"><a href="service-details.html">Service Details</a></li>
                                        <li className="menu-item menu-item-has-children"><a>Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="shop-1.html">Shop One</a></li>
                                                <li className="menu-item"><a href="shop-2.html">Shop Two</a></li>
                                                <li className="menu-item"><a href="shop-3.html">Shop Three</a></li>
                                                <li className="menu-item"><a href="shop-product.html">Product Details</a></li>
                                                <li className="menu-item"><a href="shop-cart.html">Shop Cart</a></li>
                                                <li className="menu-item"><a href="shop-checkout.html">Checkout</a></li>
                                                <li className="menu-item"><a href="login.html">Login</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="contact.html">Contacts</a></li>
                                <li className="menu-item menu-item-has-children"><a>Blog</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="blog.html">Blog</a></li>
                                        <li className="menu-item"><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="header_right_part d-flex align-items-center">
                            <button className="aside_open">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                            <div className="header_search">
                                <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                            </div>
                            <div className="open_search">
                                <form className="search_form" action="search.php">
                                    <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                    <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                            <button className="ma5menu__toggle d-lg-none d-block" type="button">
                                <i className="bi bi-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="aside_info_wrapper">
                <button className="aside_close"><i className="bi bi-x-lg"></i></button>
                <div className="aside_logo">
                    <a href="index.html" className="light_logo"><img src="../assets/img/logo-light-lg.svg" alt="logo" /></a>
                    <a href="index.html" className="dark_logo"><img src="../assets/img/logo-dark-lg.svg" alt="logo" /></a>
                </div>
                <div className="aside_info_inner">
                    <p>Mrittik Architects is a full-service design firm providing architecture architecture.</p>

                    <div className="aside_info_inner_box">
                        <h5>Contact Info</h5>
                        <p>+123 456 789 33</p>
                        <p>3 Madison Street, NY <br /> United States of America</p>
                        <p>mrittikarch@gmail.com</p>

                        <h5>Office Address</h5>
                        <p>+Time Square, New York <br /> USA, 3454</p>
                    </div>
                    <div className="social_sites">
                        <ul className="d-flex align-items-center justify-content-center">
                            <li><a><i className="bi bi-facebook"></i></a></li>
                            <li><a><i className="bi bi-twitter"></i></a></li>
                            <li><a><i className="bi bi-instagram"></i></a></li>
                            <li><a><i className="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;