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
          alignItems={"center"}
          textTransform={"uppercase"}
          mb={7}
          color={"green.400"}
        >
          About The Project
        </Heading>
        <BlogTags
          tags={["hackCBS 4.0", "Reactjs", "spotify", "shazam"]}
          marginTop="3"
        />
        <Text as="p" fontSize="lg" marginTop="3">
          In traditional music applications you need to have an apps like shazam
          to know which song it is and then you manually search that song on
          spotify and add it to your playlist but through LISTEN & FORGET, user
          can record the audio and can get to know which song it is and that
          song can be added to your spotify playlist so that you can listen to
          it anytime & anywhere . Just enjoy the movement because LISTEN &
          FORGET never let the songs you hear to be forgoten .
        </Text>

        <Heading
          as="h4"
          fontFamily={"Ubuntu"}
          fontWeight={"medium"}
          fontSize={28}
          mb={7}
          color={"green.400"}
        >
          hackCBS 4.0
        </Heading>
        <Text as="p" fontSize="lg" marginTop="3">
          hackCBS is Delhi University’s largest student hackathon-cum-conference
          organisised by The Tech Society of Shaheed Sukhdev College of Business
          Studies, Rohini. After debuting as the first ever hackathon across
          Delhi University, hackCBS is back bigger and better with it’s version
          4.0, with the support of Major League Hacking as it enters Asia
          Pacific region for the first time. hackCBS invites designers,
          programmers, and inventors across India to code, build and design
          innovative hacks to tackle real-world problems.hackCBS is a movement
          ignited by the students and we are love to be the part of it :)
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
