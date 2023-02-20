import React from 'react';
import BlogsContainer from '../containers/BlogsContainer';
import PageBanner from '../containers/PageBanner';

const Blog = () => {
    return (
        <>
            <PageBanner title="Blog" activePage="Blog"></PageBanner>
            <main className="wrapper">
                <BlogsContainer />
            </main>
        </>
    );
};

export default Blog;