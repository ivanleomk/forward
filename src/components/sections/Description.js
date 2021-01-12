import {Center, Heading, Flex} from '@chakra-ui/react';
import React from 'react';

const Description = ({title, children, subtitle}) => {
    return (
        <Center mb="20" mt="20">
            <Flex maxW={600} direction="column" align="center">
                <Heading as="h1" size="xl" fontSize="50px">
                    {title}
                </Heading>
                {children}
            </Flex>
        </Center>
    );
};

export default Description;
