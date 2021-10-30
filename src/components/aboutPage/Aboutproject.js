
import React from 'react';
import {
  Heading,
  
  Text,
  HStack,
  Tag,
  Container,
  VStack,
} from '@chakra-ui/react';



const BlogTags= (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


const About = () => {
  return (
    <Container maxW={'7xl'} p="12">
      
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h1" fontFamily={'Work Sans'}
            fontWeight={'bold'}fontSize={48} textTransform={'uppercase'} mb={7}
        color={'green.400'}>About The Project</Heading>
            <BlogTags tags={['Reactjs', 'spotify','shazam']} marginTop="3" />
        <Text as="p" fontSize="lg" marginTop="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecsed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
    
  );
};

export default About;


