import {  } from "@chakra-ui/layout";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';

import React from "react";
import Recorder from "../components/Recorder";

function Home() {
  return (
    
    // <Flex flexDir='column' justify='center' alignItems='center'>
    //   <Button
    //     onClick={() => {
    //       window.open(process.env.REACT_APP_LOGIN, "_self");
    //     }}
    //   >
    //     Login to spotify
    //   </Button>
    
    <Container maxW={'3xl'}>
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        {/* Listen<br/> & <br/> */}
        <Text as={'span'} color={'blue.500'}>
          LISTEN <br/>
        </Text>
        <Text as={'span'} color={'grey.400'}>
          & <br/>
        </Text>
        <Text as={'span'} color={'green.500'}>
          FORGET
        </Text>
        
      </Heading>
      <Text color={'gray.500'}>
        identify the music playing around you and explore the music you love.
      </Text>
      <Stack
        direction={'column'}
        spacing={5}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
         <Button
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}
          onClick={() => {
            window.open(process.env.REACT_APP_LOGIN, "_self");
          }}
          >
              <a href="#" >Login to spotify </a>
          
        </Button>
        
       
      </Stack>
    </Stack>
    {/* <Recorder /> */}
  </Container>
    // </Flex>
  );
}

export default Home;
