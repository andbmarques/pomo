import { Button, ButtonGroup, Divider, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useTimer } from 'react-timer-hook';
import { ClockCounterClockwise, Pause, Play } from 'phosphor-react';
import { TimerContext } from '../Contexts/SettingsContext';
import { getExpiryTimestamp } from '../Utils/expiryTimestamp';

export default function Timer() {
    
    const context = useContext(TimerContext)

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        restart
    } = useTimer({ expiryTimestamp: getExpiryTimestamp(context), autoStart: false, onExpire: () => console.warn('Expired') })

    const text = useColorModeValue('purple.900', 'white')

    return (
        <Stack spacing={10}>
            <Text alignSelf='center' fontSize='lg' >{isRunning ? 'Time to focus!' : ''}</Text>
            <HStack spacing={6} color='white' >
                <Text bg='purple.900' fontSize='9xl' py='5' px='10' borderRadius='lg' >{minutes.toString().length === 1 ? `0${minutes}` : minutes}</Text>
                <Text fontSize='9xl' color={text} >:</Text>
                <Text bg='purple.900' fontSize='9xl' py='5' px='10' borderRadius='lg' >{seconds.toString().length === 1 ? `0${seconds}` : seconds}</Text>
            </HStack>
            <Divider />
            <ButtonGroup justifyContent='center'>

                {
                    isRunning ?
                        <Button bg='purple.900' color='white' size='lg' onClick={pause}>
                            <Icon
                                as={Pause}
                                weight='fill'
                            />
                        </Button> :
                        <Button bg='purple.900' color='white' size='lg' onClick={start}>
                            <Icon
                                as={Play}
                                weight='fill'
                            />
                        </Button>
                }
                <Button bg='purple.900' color='white' size='lg' onClick={() => restart(getExpiryTimestamp(context), false)}>
                    <Icon
                        as={ClockCounterClockwise}
                        weight='fill'
                    />
                </Button>
            </ButtonGroup>
        </Stack>
    );
}