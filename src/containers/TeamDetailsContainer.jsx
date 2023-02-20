import React from 'react';
import EducationalQualification from './EducationalQualification';

const TeamDetailsContainer = () => {
    return (
        <main className="wrapper">
            {/* <!-- Our Team --> */}
            <section className="team team-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 pe-lg-5">
                            <div className="team-member-img">
                                <img src="images/team/7.jpg" alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 ps-lg-0">
                            <div className="team-member-information">
                                <h5 className="name text-white">Benjamin Brook</h5>
                                <h6 className="designation text-uppercase text-olive">Architect</h6>
                                <div className="bio">At vero eos et accusamus et iusto odio digni is simos ducimus qui blanditiis praesentium volu ptatum dele niti atque corryi upti quos. dolores et quas molestias. At vero eos et accusamus et iusto.</div>
                                <div className="social-media">
                                    <ul>
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                    </ul>
                                </div>

                                <EducationalQualification title='Education & Qualification' li1='Graduation In Architecture From' li2='Diploma In Landscape Design From' span1='YALE University' li3='Diploma In Landscape Design From' span2='JNU' />

                                <EducationalQualification title='Awards' li1='Best Design Award 2022 Best' li2='Design Award 2021' li3='Best Design Award 2020' />


                            </div>
                        </div>
                    </div>

                    <div className="latest-projects">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <h6 className="widget-title text-white mb-3">
                                        Latest Projects
                                        <span className="title-line"></span>
                                    </h6>
                                    <div className="text text-white">At vero eos et accusamus et iusto odio digni
                                        is simos ducimus qui blanditiis praesentium
                                        volu ptatum dele niti atque corryi upti quos.
                                        dolores et quas molestias. At vero eos et
                                        accusamus et iusto.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <a href="/project-details">
                                        <img src="images/portfolio/latest/1.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <a href="/project-details">
                                        <img src="images/portfolio/latest/2.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <a href="/project-details">
                                        <img src="images/portfolio/latest/3.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <a href="/project-details">
                                        <img src="images/portfolio/latest/4.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="project">
                                    <a href="/project-details">
                                        <img src="images/portfolio/latest/5.jpg" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TeamDetailsContainer;