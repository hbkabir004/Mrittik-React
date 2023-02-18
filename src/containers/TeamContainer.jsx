import React from 'react';
import PageHeader from '../components/PageHeder';
import Paragraph from '../components/Paragraph';
import TeamCard from '../components/TeamCard';

const TeamContainer = () => {
    return (
        <section className="team in-team">
            <div className="container-sm">
                <div className="section-header medium">
                    <PageHeader title="Meet Our Team"></PageHeader>
                    <div className="section-desc row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <Paragraph text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning & programming."></Paragraph>
                        </div>
                        <div className="col-lg-7">
                            <Paragraph text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design interior architecture space planning & programming. Our portfolio of completed work includes highly acclaim"></Paragraph>
                        </div>
                    </div>
                </div>

                <div className="team_inner">
                    <div className="row">
                        <TeamCard img="images/team/1.jpg" name="Michel Robertson" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/2.jpg" name="Mellisa Johansen" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/3.jpg" name="Dave Crossby" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/4.jpg" name="Hazel R. Grace" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/5.jpg" name="Benjamin Brook" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/6.jpg" name="Garrison Gardner" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/7.jpg" name="Ellen Johansen" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/8.jpg" name="Austin Gilbert" designation="ARCHITECT"></TeamCard>
                        <TeamCard img="images/team/9.jpg" name="Ashly Graham Zen" designation="ARCHITECT"></TeamCard>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamContainer;