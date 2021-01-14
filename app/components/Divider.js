import React from 'react';

const Divider = ({text}) => {
    return (
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="max-w-md w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
                <span class="px-3 bg-white text-lg font-medium text-gray-900">{text}</span>
            </div>
        </div>
    );
};

export default Divider;
