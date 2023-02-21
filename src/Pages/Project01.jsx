import React from 'react';
import PageBanner03 from '../containers/PageBanner03';
import ProjectGallery from '../containers/ProjectGallery';

const Project01 = () => {
    return (
        <>
            <PageBanner03 title="Projects" activePage="Projects" />
            <ProjectGallery text='Load More' className='btn gray' />
        </>
    );
};

export default Project01;