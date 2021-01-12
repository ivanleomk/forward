import React, {useEffect} from 'react';
import getMentorList from '../../api/getMentorList';

export default function Mentors({mentorList}) {
    return (
        <>
            {mentorList &&
                mentorList.map((item) => (
                    <div>
                        <span>{item.name}</span> | <span>{item.location}</span> | <span>{item.industry}</span>
                    </div>
                ))}
        </>
    );
}
