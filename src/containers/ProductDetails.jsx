import React from 'react';

const ProductDetails = ({ projectDetails }) => {
    const { id, img, name, badge, newClass, oldClass, price, oldPrice, categoryName } = projectDetails;
    return (
        <section class="product_details_section bg-dark-200">
            <div class="container">
                <div class="product_details_tab">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="active" data-bs-toggle="tab" href="#description">Description</a>
                        </li>
                        <li class="nav-item">
                            <a data-bs-toggle="tab" href="#information">Additional Information</a>
                        </li>
                        <li class="nav-item">
                            <a data-bs-toggle="tab" href="#reviews">Reviews (2)</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="description" tabindex="0">
                            <p>Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a tempor id. A lacus vest ibulum sed arcu non odio euismod lacinia. In tellus integer feugiat sceleris que. Feugiat in ferme ntum posuere urna nec tincidunt praesent.</p>
                            <p>Porttitor rhonc elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectusSenectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ne semper auctor.</p>
                        </div>
                        <div class="tab-pane fade" id="information" tabindex="0">
                            <div class="product_additional_info">
                                <p class="mb-3">A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhonc
                                    elementum facilisis.</p>
                                <ul class="px-0 mb-0">
                                    <li class="categories"><span>Material:</span> Cotton & Linen</li>
                                    <li class="sku"><span>Lenght:</span> 30 Inch</li>
                                    <li class="tags"><span>Weight:</span> 400gm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="reviews" tabindex="0">
                            <div class="review_sec">
                                <h6 class="review_title">1 review for <a href="#">Product Name</a></h6>
                                <ul class="review_area">
                                    {/* <!-- First Review --> */}
                                    <li class="blog_review_user">
                                        <div class="reviewer_div">
                                            <div class="reviewer">
                                                <img alt="img" src="images/blog/commenter1.png" class="avatar" />
                                            </div>
                                            <div class="review_block">
                                                <div class="product_rating">
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-half"></i>
                                                    <i class="bi bi-star"></i>
                                                </div>
                                                <h4 class="reviewer_name">Adam Paul <span class="review_date">07/08/2022</span></h4>
                                                <p class="reviewer_review">Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras
                                                    semper auctor. Libero id faucibus nisl tincidunt eget. </p>

                                            </div>
                                        </div>
                                    </li>

                                    {/* <!-- Second Review --> */}
                                    <li class="blog_review_user">
                                        <div class="reviewer_div">
                                            <div class="reviewer">
                                                <img alt="img" src="images/blog/commenter2.png" class="avatar" />
                                            </div>
                                            <div class="review_block">
                                                <div class="product_rating">
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-half"></i>
                                                    <i class="bi bi-star"></i>
                                                </div>
                                                <h4 class="reviewer_name">Belik Jam <span class="review_date">29/07/2022</span></h4>
                                                <p class="reviewer_review">As the world continues to fight COVID-19 some property owners are searching for way they can improve the security of their buildings.</p>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="reviews-pagination">
                                    <span aria-current="page" class="page-numbers current">1</span>
                                    <a class="page-numbers" href="#">2</a>
                                </div>
                            </div>

                            <div class="review_form">
                                <div class="review_form_heading_wrapper">
                                    <h4 class="review_form_title">Add a Review <span class="title-line"></span></h4>
                                    <h6 class="review_form_sub_title">Your email address will not be published. Required fields are marked *</h6>
                                    <h6 class="give_rating">Your Rating *</h6>
                                    <div class="reviewer_rating">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                    </div>
                                </div>
                                <div class="comment-respond mt-4">
                                    <form class="comment-form" action="register.php" method="post">
                                        <div class="form-container">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" placeholder="Text Here*" required="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <input type="text" name="name" class="form-control" placeholder="Name*" required="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <input type="email" name="email" class="form-control" placeholder="E-mail*" required="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="btn_group">
                                                        <input class="btn olive" type="submit" value="Submit" name="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default ProductDetails;