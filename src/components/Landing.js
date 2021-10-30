// import React from 'react'

// const Landing = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Landing

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  
} from '@chakra-ui/react';

export default function Landing() {
  return (
    <>
      

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
              }}>
                  <a href="#" >Log in </a>
              
            </Button>
            
           
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

