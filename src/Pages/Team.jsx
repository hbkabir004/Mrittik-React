import React from 'react';
import PageBanner from '../containers/PageBanner';
import TeamContainer from '../containers/TeamContainer';

const Team = () => {
    return (
        <>
            <PageBanner title="Our Team" activePage="Team"></PageBanner>
            <main className="wrapper">
                <TeamContainer></TeamContainer>
            </main>
        </>
    );
};

export default Team;