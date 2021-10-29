import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
// import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify='center'>
      <Button
        position='absolute'
        right='1'
        top='1'
        _focus={{ outline: "none" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Heading as='h1' size='2xl'>
        Listen and Forgot
      </Heading>
    </Flex>
  );
}

export default App;
