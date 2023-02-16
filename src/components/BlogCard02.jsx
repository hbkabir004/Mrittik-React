import React from 'react';

const BlogCard02 = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog_post mb-0">
                <img src="images/blog/2.jpg" alt="img" />
                <div className="blog_content">
                    <h2 className="post-count">02</h2>
                    <div className="meta">
                        <time className="text-olive" dateTime="2022-10-20">OCTOBER 20, 2022</time>
                    </div>
                    <h5><a href="blog-details.html" className="text-white">Space optimization is now considered as art</a></h5>
                    <p>Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....</p>
                    <div className="details_link"><a href="blog-details.html"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard02;