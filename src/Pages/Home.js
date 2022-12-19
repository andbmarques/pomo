import React from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import Timer from '../Components/Timer';

export default function Home() {

  const bg = useColorModeValue('white', 'purple.800')

  return (
    <VStack w='100vw' h='90vh' bg={bg} p='10' alignItems='center' justifyContent='center' >
      <Timer />
    </VStack>
  );
}