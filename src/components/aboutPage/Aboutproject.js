import React from "react";
import {
  Heading,
  Text,
  HStack,
  Tag,
  Container,
  VStack,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading
          as="h1"
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={48}
          textTransform={"uppercase"}
          mb={7}
          color={"green.400"}
        >
          About The Project
        </Heading>
        <BlogTags tags={["Reactjs", "spotify", "shazam"]} marginTop="3" />
        <Text as="p" fontSize="lg" marginTop="3">
          In traditional music applications you need to have an apps like shazam
          to know which song it is and then you manually search that song on
          spotify and add it to your playlist but through LISTEN & FORGOT, user can record the audio and can
          get to know which song it is and that song can be added to your
          spotify playlist so that you can listen to it anytime & anywhere .
          so it never let the unknown songs you hear to be forgoten .  
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
