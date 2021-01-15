import React from 'react';
import Link from 'next/link';

//Asset Imports

const Hero = ({title, subtitle, image, ctaLink, ctaText, ...rest}) => {
    return (
        <div class="bg-gray-50">
            <div class="relative overflow-hidden">
                <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
                    <div class="relative h-full">
                        <svg
                            class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                            width="404"
                            height="784"
                            fill="none"
                            viewBox="0 0 404 784"
                        >
                            <defs>
                                <pattern
                                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
                        </svg>
                        <svg
                            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                            width="404"
                            height="784"
                            fill="none"
                            viewBox="0 0 404 784"
                        >
                            <defs>
                                <pattern
                                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
                        </svg>
                    </div>
                </div>

                <div class="relative pt-6 pb-16 sm:pb-24">
                    <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                        <div class="text-center">
                            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span class="block">Get Guidance at each step of the </span>
                                <span class="block text-indigo-600">Application Process</span>
                            </h1>
                            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                Navigating the foreign job market alone is difficult. Join a tight-knit network of
                                committed and hardworking malaysian youths today with Forward.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute inset-0 flex flex-col" aria-hidden="true">
                        <div class="flex-1"></div>
                        <div class="flex-1 w-full bg-gray-800"></div>
                    </div>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6">
                        <img
                            class="relative rounded-lg shadow-lg"
                            src="https://images.unsplash.com/photo-1501238295340-c810d3c156d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
            <div class="bg-gray-800">
                <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
                        Get assistance with companies such as
                    </h2>
                    <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img class="h-12" src="/GoldmanSachs.png" alt="Tuple" />
                        </div>
                        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img class="h-12" src="/CreditSuisse.png" alt="Mirage" />
                        </div>
                        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img class="h-12" src="/BCG.png" alt="StaticKit" />
                        </div>
                        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <img class="h-12" src="/pwc.png" alt="Transistor" />
                        </div>
                        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img class="h-12" src="/citi.png" alt="Workcation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
