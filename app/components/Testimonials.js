import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    return (
        <section class="bg-white overflow-hidden">
            <div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                <svg
                    class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                    width="784"
                    height="404"
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
                </svg>

                <svg
                    class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                    width="404"
                    height="784"
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
                </svg>

                <div class="relative lg:flex lg:items-center">
                    <div class="hidden lg:block lg:flex-shrink-0">
                        <img
                            class="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>

                    <Testimonial />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
