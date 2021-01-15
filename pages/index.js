// Library Imports
import React from 'react';

//Component Imports
import Hero from '../app/components/Hero';
import Description from '../app/components/Description';
import Mentors from '../app/components/Mentors';

// Helper Function Imports
import getMentorList from '../app/api/getMentorList';
import {Center} from '@chakra-ui/react';
import Divider from '../app/components/Divider';
import Testimonials from '../app/components/Testimonials';
import Footer from '../app/components/Footer';
import CallToAction from '../app/components/CallToAction';
import ContactForm from '../app/components/ContactForm';

const Landing = ({mentorList}) => {
    return (
        <>
            <Hero />
            <Testimonials />
            <Mentors mentorList={mentorList} core={true} description={'Meet the core team behind this initiative'} />
            <CallToAction />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Landing;

export async function getStaticProps() {
    return {
        props: {
            mentorList: await getMentorList(),
        },
    };
}
