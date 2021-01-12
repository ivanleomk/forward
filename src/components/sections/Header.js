import React, {useEffect} from 'react';
import {Box, Heading, Flex, Text, Button} from '@chakra-ui/core';
import useWindowSize from '../../hooks/useWindowSize';

const MenuItems = ({children}) => (
    <Text mt={{base: 4, md: 0}} mr={6} display="block">
        {children}
    </Text>
);

const Header = (props) => {
    const [show, setShow] = React.useState(true);
    const {width} = useWindowSize();

    useEffect(() => {
        if (width < 720) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [width]);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            color="black"
            mb="10"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="xl" size="lg" letterSpacing={'-.1rem'}>
                    Forward
                </Heading>
            </Flex>

            {show && (
                <Flex>
                    <Heading
                        as="h2"
                        size="sm"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                        ml="5"
                    >
                        About Us
                    </Heading>
                    <Heading
                        as="h2"
                        size="sm"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                        ml="5"
                    >
                        Our Mentors
                    </Heading>
                    <Heading
                        as="h2"
                        size="sm"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                        ml="5"
                    >
                        Sign Up
                    </Heading>
                </Flex>
            )}
        </Flex>
    );
};

export default Header;
