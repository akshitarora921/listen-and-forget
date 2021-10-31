import React from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p='3'
      w='100%'
      textAlign='center'
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Text>© 2021 Hack_it-007. All rights reserved</Text>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;
