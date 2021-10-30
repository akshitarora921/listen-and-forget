import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import Recorder from "../components/Recorder";

function Home() {
  return (
    <Flex flexDir='column' justify='center' alignItems='center'>
      <Button
        onClick={() => {
          window.open(process.env.REACT_APP_LOGIN, "_self");
        }}
      >
        Login to spotify
      </Button>
      <Recorder />
    </Flex>
  );
}

export default Home;
