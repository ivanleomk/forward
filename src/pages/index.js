import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import Description from '../components/sections/Description';
import {Text, Heading, Image, Stack} from '@chakra-ui/core';
import Mentors from '../components/sections/Mentors';
import getMentorList from '../api/getMentorList';
import {Center} from '@chakra-ui/react';

export default function Landing({mentorList}) {
    return (
        <LandingLayout>
            <Hero
                title="Forward"
                subtitle="Building a high-impact network for driven Malaysian youth"
                image="https://source.unsplash.com/XmF4nNTPQk8/800x600"
                ctaText="Get Involved Today"
                ctaLink="/signup"
            />
            <Center>
                <h2
                    class="mt-5 text-3xl  text-black dark:text-white sm:text-4xl "
                    style={{maxWidth: '1200px', width: '70vw'}}
                >
                    <span class="block font-extrabold m-4">From application to offer,</span>
                    <span class="block  font-extrabold m-4 text-indigo-500">Forward is your end-to-end partner</span>
                    <span class="block text-xl m-4">
                        Ut euismod lobortis nisi suscipit posuere. Fusce convallis mollis tristique. Aliquam porta elit
                        eget tristique congue. Nam imperdiet mauris eu mauris pharetra, vel blandit ligula iaculis.
                        Fusce rhoncus rutrum sapien quis gravida. Aliquam ornare eleifend tortor, non egestas mauris
                        tempor vel. Cras pharetra volutpat nibh, non tincidunt massa tristique at. Ut condimentum augue
                        sit amet eros vehicula, placerat iaculis est dignissim.
                    </span>
                </h2>
            </Center>

            <Description title="Our Mentors" subtitle="Meet the People Behind Forward">
                <Mentors mentorList={mentorList} />
            </Description>
            <Center>
                <div class="bg-white dark:bg-gray-800 ">
                    <div class="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span class="block">Want to get started?</span>
                            <span class="block text-indigo-500">It&#x27;s now or never.</span>
                        </h2>
                        <div class="lg:mt-0 lg:flex-shrink-0">
                            <div class="mt-12 inline-flex rounded-md shadow">
                                <button
                                    type="button"
                                    class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                >
                                    Get involved
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Center>
        </LandingLayout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            mentorList: await getMentorList(),
        },
    };
}
