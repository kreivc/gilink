import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { logoTextProps, parentContainerProps } from './NavbarProps';

export default function Navbar() {
    return (
        <Flex {...parentContainerProps}>
            <Text {...logoTextProps}>gilink</Text>
            {/* Navbar?? */}
            <Text fontWeight={'semibold'} fontSize={'2xl'} textAlign={'center'}>
                Navbar
            </Text>
        </Flex>
    );
}
