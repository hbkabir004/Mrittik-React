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
                <div className="row gutter-3">
                    <h1>TESTING....</h1>

                </div>

            </div>
        </div>
    );
};

export default Header02Nav;