import React from 'react';

const ContactForm = () => {
    return (
        <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div class="relative max-w-xl mx-auto">
                <svg
                    class="absolute left-full transform translate-x-1/2"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    class="absolute right-full bottom-0 transform -translate-x-1/2"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div class="text-center">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p class="mt-4 text-lg leading-6 text-gray-500">
                        Contact us here if you're interested in being mentored or mentoring others! We'll reach out to
                        you within 3 working days.
                    </p>
                </div>
                <div class="mt-12">
                    <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="first_name" class="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autocomplete="given-name"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="last_name" class="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    autocomplete="family-name"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="company" class="block text-sm font-medium text-gray-700">
                                Current Industry
                            </label>
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autocomplete="organization"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div class="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="capacity" class="block text-sm font-medium text-gray-700">
                                Are you interested in being mentored or doing the mentoring?
                            </label>
                            <div class="mt-1">
                                <select
                                    id="capacity"
                                    name="capacity"
                                    rows="4"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                >
                                    <option value="volvo">Mentoring</option>
                                    <option value="saab">Being Mentored</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-700">
                                Why do you want to join Forward?
                            </label>
                            <div class="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                ></textarea>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <button
                                type="submit"
                                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
