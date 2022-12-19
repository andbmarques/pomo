import React from 'react';
import { Heading, HStack, Icon, IconButton, Link } from '@chakra-ui/react';
import { ClockClockwise, Gear } from 'phosphor-react';
import { ColorModeSwitcher } from '../Utils/ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <HStack color='white' w='100vw' h='10vh' px='8' justifyContent='space-between' bgColor='purple.900'>
            <Link _hover={{ opacity: 0.7 }} style={{ textDecoration: 'none' }} as={RouterLink} to='/' >
                <HStack alignItems='center' >
                    <Icon
                        as={ClockClockwise}
                        fontSize='2xl'
                    />
                    <Heading size='lg' >Pomo</Heading>
                </HStack>
            </Link>
            <HStack>
                <ColorModeSwitcher />
                <Link as={RouterLink} to='/settings' >
                    <IconButton
                        size="md"
                        fontSize="lg"
                        variant='ghost'
                        _hover={{ bgColor: 'purple.900' }}
                        color="current"
                        marginLeft="2"
                        icon={<Gear weight='fill' />}
                    />
                </Link>
            </HStack>
        </HStack>
    );
}