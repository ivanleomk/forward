import React from 'react';
import {Flex} from '@chakra-ui/core';
import Header from '../sections/Header';
// import Footer from '../sections/Footer'; // will add this in the part 2

export default function LandingLayout(props) {
    return (
        <Flex direction="column" justify="center" m="0 auto" {...props}>
            <Header />
            {props.children}
        </Flex>
    );
}
