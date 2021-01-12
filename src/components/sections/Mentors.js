import React, {useEffect} from 'react';
import getMentorList from '../../api/getMentorList';

export default function Mentors({mentorList}) {
    return (
        <>
            {mentorList.map((item) => (
                <div>
                    <p>{item.name}</p> &nbsp;
                    <p>{item.location}</p> &nbsp;
                    <p>{item.industry}</p>
                </div>
            ))}
        </>
    );
}

// const Mentors = ({mentorList}) => {
//     return (
//         <>
//             {mentorList &&
//                 mentorList.map(({name, location, industry, title}) => (
//                     <div>
//                         We have {name} at {location} working in {industry} which is a {title}
//                     </div>
//                 ))}
//         </>
//     );
// };

// export default Mentors;

export async function getStaticProps() {
    return {
        props: {
            mentorList: await getMentorList(),
        },
    };
}
