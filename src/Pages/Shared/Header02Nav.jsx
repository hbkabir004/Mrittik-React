import React from 'react';

const Header02Nav = (props) => {
    // useEffect(() => {
    //     // Mobile Responsive Menu 
    //     var mobileLogoContent = $('header .logo').html();
    //     var mobileMenuContent = $('.mainnav').html();
    //     $('.mr_menu .logo').append(mobileLogoContent);
    //     $('.mr_menu .mr_navmenu').append(mobileMenuContent);
    //     $('.mr_menu .mr_navmenu ul.main_menu li.menu-item-has-children').append($("<span class='submenu_opener d-sm-none'><i class='bi bi-chevron-right'></i></span>"));

    //     // Sub-Menu Open On-Click
    //     $('.mr_menu ul.main_menu li.menu-item-has-children .submenu_opener').on("click", function (e) {
    //         $(this).parent().toggleClass('nav_open');
    //         $(this).siblings('ul').slideToggle();
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });

    //     // Active Mobile Responsive Menu : Add Class in body tag
    //     $('.mr_menu_toggle').on('click', function (e) {
    //         $('body').addClass('mr_menu_active');
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    //     $('.mr_menu_close').on('click', function (e) {
    //         $('body').removeClass('mr_menu_active');
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    //     $('.mr_menu_overlay').on('click', function (e) {
    //         $('body').removeClass('mr_menu_active');
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    // }, []);

    return (
        <div className="bg-dark offcanvas offcanvas-end" tabIndex="-1" id={props.id} aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="mainnav">
                    {/* <div className="mr_menu mr_navmenu"></div> */}
                    <ul className="main_menu">
                        <li className="menu-item menu-item-has-children active"><a href="/">Home</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/">Home One</a></li>
                                <li className="menu-item active"><a href="/home-2">Home Two</a></li>
                                <li className="menu-item"><a href="/home-3">Home Three</a></li>
                                <li className="menu-item"><a href="/home-4">Home Four</a></li>
                                <li className="menu-item"><a href="/home-5">Home Five</a></li>
                                <li className="menu-item"><a href="/home-6">Home Six</a></li>
                                <li className="menu-item"><a href="/home-7">Home Seven</a></li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children"><a href="/#">Gallery</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/project-1">Projects One</a></li>
                                <li className="menu-item"><a href="/project-2">Projects Two</a></li>
                                <li className="menu-item"><a href="/project-3">Peojects Three</a></li>
                                <li className="menu-item"><a href="/project-details">Peoject Details</a></li>
                                <li className="menu-item"><a href="/project-details-2">Peoject Details Two</a></li>
                            </ul>
                        </li>

                        <li className="menu-item menu-item-has-children"><a href="/#">Pages</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/about">About Us</a></li>
                                <li className="menu-item menu-item-has-children"><a href="/#">Team</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/team">Our Team</a></li>
                                        <li className="menu-item"><a href="/team-details">Team Details</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a href="/#">Services</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/service-1">Service One</a></li>
                                        <li className="menu-item"><a href="/service-2">Service Two</a></li>
                                        <li className="menu-item"><a href="/service-details">Service Details</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children"><a href="/#">Shop</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                        <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                        <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                        <li className="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                        <li className="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                        <li className="menu-item"><a href="/login">Login</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="/404">404 Page</a></li>
                                <li className="menu-item"><a href="/coming-soon">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li className="menu-item"><a href="/contact">Contacts</a></li>
                        <li className="menu-item menu-item-has-children"><a href="/#">Blog</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/blog">Blog</a></li>
                                <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header02Nav;