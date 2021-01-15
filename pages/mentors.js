import React from 'react';
import Mentors from '../app/components/Mentors';
import getMentorList from '../app/api/getMentorList';
import Link from 'next/link';

const mentors = ({mentorList}) => {
    return (
        <>
            <Mentors mentorList={mentorList}>
                <Link href="/" className="my-4">
                    <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Go Back
                    </button>
                </Link>
            </Mentors>
        </>
    );
};

export default mentors;

export async function getStaticProps() {
    return {
        props: {
            mentorList: await getMentorList(),
        },
    };
}
