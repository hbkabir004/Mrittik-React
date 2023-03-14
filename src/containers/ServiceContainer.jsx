import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FormContainer from '../containers/FormContainer';

const ServiceContainer01 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='500'>
                            <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='600'>
                            <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='700'>
                            <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='800'>
                            <ServiceCard number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='900'>
                            <ServiceCard number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div class="col-lg-4" data-aos="fade-up" data-aos-duration='1000'>
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                    </div>
                </div>
            </section>

            {/* <Testimoals /> */}
            <FormContainer />

        </main>
    );
};

export default ServiceContainer01;