import React from 'react';

const FilterForm = ({industry, location, setIndustry, setLocation}) => {
    return (
        <div className="text-white text-lg p-4">
            I am a student looking for a mentor in the{' '}
            <input
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="bg-transparent border-b-2 mt-4 mb-4 px-2 focus:outline-none	text-white"
            ></input>{' '}
            industry who is located in{' '}
            <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-b-2 px-2 focus:outline-none	text-white"
            ></input>
            .
        </div>
    );
};

export default FilterForm;
