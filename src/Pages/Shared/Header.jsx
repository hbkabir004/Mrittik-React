import $ from 'jquery';
import React, { useEffect } from 'react';
import AsideInfo from './AsideInfo';

const Header = () => {
    useEffect(() => {
        // Aside info bar
        $('.aside_open').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

        // Toggle Header Search
        $('.header_search .form-control-submit').click(function (e) {
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("bg-dark sticky");
            } else {
                header.removeClass("bg-dark sticky");
            }
        });
    }, []);
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_inner d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <a src="index" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                            <a src="index" className="dark_logo"><img src="images/logo-dark.svg" alt="logo" /></a>
                        </div>


                        <div className="mainnav d-none d-lg-block">
                            <ul className="main_menu">
                                <li className="menu-item menu-item-has-children active"><a src="/">Home</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item active"><a src="/">Home One</a></li>
                                        <li className="menu-item"><a src="/home-2">Home Two</a></li>
                                        <li className="menu-item"><a src="/home-3">Home Three</a></li>
                                        <li className="menu-item"><a src="/home-4">Home Four</a></li>
                                        <li className="menu-item"><a src="/home-5">Home Five</a></li>
                                        <li className="menu-item"><a src="/home-6">Home Six</a></li>
                                        <li className="menu-item"><a src="/home-7">Home Seven</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a src="/">Gallery</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a src="/project-1">Projects One</a></li>
                                        <li className="menu-item"><a src="/project-2">Projects Two</a></li>
                                        <li className="menu-item"><a src="/project-3">Peojects Three</a></li>
                                        <li className="menu-item"><a src="/project-details">Peoject Details</a></li>
                                        <li className="menu-item"><a src="/project-details-2">Peoject Details Two</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a src="/">Pages</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a src="/about">About Us</a></li>
                                        <li className="menu-item menu-item-has-children"><a src="/">Team</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a src="/team">Our Team</a></li>
                                                <li className="menu-item"><a src="/team-details">Team Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a src="/">Services</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a src="/service-1">Service One</a></li>
                                                <li className="menu-item"><a src="/service-2">Service Two</a></li>
                                                <li className="menu-item"><a src="/service-details">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a src="/">Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a src="/shop-1">Shop One</a></li>
                                                <li className="menu-item"><a src="/shop-2">Shop Two</a></li>
                                                <li className="menu-item"><a src="/shop-3">Shop Three</a></li>
                                                <li className="menu-item"><a src="/shop-product">Product Details</a></li>
                                                <li className="menu-item"><a src="/shop-cart">Shop Cart</a></li>
                                                <li className="menu-item"><a src="/shop-checkout">Checkout</a></li>
                                                <li className="menu-item"><a src="/login">Login</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a src="/404">404 Page</a></li>
                                        <li className="menu-item"><a src="/coming-soon">Coming Soon</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a src="/contact">Contacts</a></li>
                                <li className="menu-item menu-item-has-children"><a src="/">Blog</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a src="/blog">Blog</a></li>
                                        <li className="menu-item"><a src="/blog-details">Blog Details</a></li>
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

            <AsideInfo></AsideInfo>
        </>
    );
};

export default Header;