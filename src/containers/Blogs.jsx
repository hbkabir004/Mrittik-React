import React from 'react';
import BlogCard from '../components/BlogCard';
import BlogCard02 from '../components/BlogCard02';
import BlogCard03 from '../components/BlogCard03';

const Blogs = () => {
    return (
        <section className="blog pt-lg bg-dark-100">
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center">Latest</h2>
            </div>
            <div className="container">
                <div className="section-header text-center has_line">
                    <h2 className="text-white">LATEST BLOGS</h2>
                </div>

                <div className="row">
                    <BlogCard></BlogCard>
                    <BlogCard02></BlogCard02>
                    <BlogCard03></BlogCard03>
                </div>
            </div>

        </section>
    );
};

export default Blogs;