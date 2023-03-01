import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    return (
        <section className="services bg-dark-100 pt-4 pb-0">
            <div className="container">
                <div className="row">
                    <ServiceCard duration='500' number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                    <ServiceCard duration='700' number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                    <ServiceCard duration='900' number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                </div>
            </div>
        </section>
    );
};

export default Services;