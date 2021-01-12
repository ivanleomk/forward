import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import Description from '../components/sections/Description';
import {Text, Heading, Image, Stack} from '@chakra-ui/core';
import Mentors from '../components/sections/Mentors';

export default function Landing() {
    return (
        <LandingLayout>
            <Hero
                title="Forward"
                subtitle="Building a high-impact network for driven Malaysian youth"
                image="https://source.unsplash.com/XmF4nNTPQk8/800x600"
                ctaText="Get Involved Today"
                ctaLink="/signup"
            />
            <Description title="About Us" subtitle="Our Story"></Description>
            {/* <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    Our mentors have recieved offers from or are working at
                </Heading> */}
            <Description title="Our Mentors" subtitle="Meet the People Behind Forward">
                <Mentors />
            </Description>
        </LandingLayout>
    );
}
