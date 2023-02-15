import React from 'react';
import ClientsLogo from '../components/ClientsLogo';
import Form from '../components/Form';
import FormText from '../components/FormText';
import SectionGridLines from '../components/SectionGridLines';

const FormContainer = () => {
    return (
        <section class="contact_us bg-dark-200">
            <div class="container">
                <div class="row justify-content-between">
                    <FormText></FormText>
                    <Form></Form>
                </div>
                <ClientsLogo></ClientsLogo>
            </div>
            <SectionGridLines></SectionGridLines>
        </section>
    );
};

export default FormContainer;