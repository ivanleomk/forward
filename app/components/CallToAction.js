import React from 'react';
import Link from 'next/link';
const CallToAction = () => {
    return (
        <div class="relative bg-gray-800">
            <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    class="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                    alt=""
                />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                        Have a specific industry vertical in mind?
                    </h2>
                    <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                    <p class="mt-3 text-lg text-gray-300">See our full list of mentors and what we have to offer</p>
                    <div class="mt-8">
                        <div
                            class="inline-flex rounded-md shadow"
                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                        >
                            <Link href="/mentors">Meet Our Mentors</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
