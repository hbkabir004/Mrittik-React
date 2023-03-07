import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FormContainer from '../containers/FormContainer';

const ServiceContainer01 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">
                        <ServiceCard duration='500' number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='600' number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='700' number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='800' number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='900' number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='1000' number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                    </div>
                </div>
            </section>

            {/* <Testimoals /> */}
            <FormContainer />

        </main>
    );
};

export default ServiceContainer01;