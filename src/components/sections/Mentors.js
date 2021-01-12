import React, {useEffect} from 'react';
import getMentorList from '../../api/getMentorList';

const Mentors = ({mentorList}) => {
    console.log(mentorList);
    return (
        <>
            {mentorList &&
                mentorList.map(({name, location, industry, title}) => (
                    <div>
                        We have {name} at {location} working in {industry} which is a {title}
                    </div>
                ))}
        </>
    );
};

export default Mentors;

export async function getStaticProps() {
    return {
        props: {
            mentorList: await getMentorList(),
        },
    };
}
