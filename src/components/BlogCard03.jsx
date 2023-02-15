import React from 'react';

const BlogCard03 = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog_post mb-0">
                <img src="images/blog/3.jpg" alt="img" />
                <div className="blog_content">
                    <h2 className="post-count">03</h2>
                    <div className="meta">
                        <time className="text-olive" datetime="2022-10-20">OCTOBER 20, 2022</time>
                    </div>
                    <h5><a href="blog-details.html" className="text-white">Aga khan Award , 2019 see the best shots</a></h5>
                    <p>Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....</p>
                    <div className="details_link"><a href="blog-details.html"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard03;