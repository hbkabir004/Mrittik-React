import React from 'react';
import PageBanner from '../../containers/PageBanner';
import TeamContainer from '../../containers/TeamContainer';

const Team = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Our Team" activePage="Team" />
            <main className="wrapper">
                <TeamContainer />
            </main>
        </>
    );
};

export default Team;