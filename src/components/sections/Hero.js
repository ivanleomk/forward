import React from 'react';
import Link from 'next/link';
import {Flex, Stack, Heading, Button, Box, Image, ArrowForwardIcon} from '@chakra-ui/core';
import {Center} from '@chakra-ui/react';

const Hero = ({title, subtitle, image, ctaLink, ctaText, ...rest}) => {
    return (
        <Center>
            <Flex
                align="center"
                justify={{base: 'center', md: 'space-around', xl: 'space-between'}}
                direction={{base: 'column-reverse', md: 'row'}}
                wrap="no-wrap"
                minH="85vh"
                px={8}
                mb={16}
                {...rest}
                maxW={1200}
            >
                <Stack
                    spacing={4}
                    w={{base: '80%', md: '40%'}}
                    align={['center', 'center', 'flex-start', 'flex-start']}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={['center', 'center', 'left', 'left']}
                    >
                        {title}
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                    >
                        {subtitle}
                    </Heading>
                    <Link href={ctaLink}>
                        <button
                            type="button"
                            class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                            Get started
                        </button>
                    </Link>
                </Stack>
                <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}>
                    <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
                </Box>
            </Flex>
        </Center>
    );
};

export default Hero;
