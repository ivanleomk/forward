import {Stack} from '@chakra-ui/core';
import {Center} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import getMentorList from '../api/getMentorList';
import Mentor from './Mentor';

export default function Mentors({mentorList}) {
    const [mentors, setMentors] = React.useState(mentorList);

    return (
        <div class="bg-gray-900">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet our team</h2>
                        <p class="text-xl text-gray-300">
                            Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas
                            vel mattis neque.
                        </p>
                    </div>
                    <ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        {mentors && mentors.map((item) => <Mentor item={item} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
