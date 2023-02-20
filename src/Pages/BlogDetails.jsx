import React from 'react';
import BlogDetailsContainer from '../containers/BlogDetailsContainer';
import PageBanner from '../containers/PageBanner';

const BlogDetails = () => {
    return (
        <>
            <PageBanner title="Contact" activePage="Contact"></PageBanner>
            <BlogDetailsContainer />
        </>
    );
};

export default BlogDetails;