import React from 'react'
import {
    
    Heading,
    
    Text,
    
    VStack,
  } from '@chakra-ui/react';
  
const About = () => {
    return (
        <div>
             <VStack padding="40px" spacing="2" alignItems="flex-start">
        <Heading as="h1" >About The Project</Heading>
        <Text as="p" fontSize="lg" color={'grey.600'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien.
        </Text>
        
      </VStack>
        </div>
    )
}

export default About
