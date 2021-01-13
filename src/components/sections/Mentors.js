import {Stack} from '@chakra-ui/core';
import {Center} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import getMentorList from '../../api/getMentorList';
import Mentor from './Mentor';

export default function Mentors({mentorList}) {
    const [mentors, setMentors] = React.useState(mentorList);

    return (
        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg">
            <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
                Meet some of the people behind the Forward movement
            </p>
            <Center>
                <Stack
                    style={{
                        minWidth: '70vw',
                        maxWidth: '1000px',
                    }}
                >
                    <div class="flex items-center justify-center flex-col md:flex-row flex-wrap">
                        {mentors && mentors.length > 0 && mentors.map((item) => <Mentor item={item} />)}
                    </div>
                </Stack>
            </Center>
        </div>
    );
}
