import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, Heading } from "@chakra-ui/layout";

// import Dashboard from "./pages/Dashboard";
// import "./App.css";
// import { SpotifyLogin } from "./SpotifyLogin";
import Routes from "./routes/routes";
import Footer from "./pages/Footer";
import { Flex } from "@chakra-ui/layout";
import Header from "./components/dashboard/Header";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify='center' flexDir='column' align='center'>
      <Button
        position='absolute'
        right='3'
        top='3'
        _focus={{ outline: "none" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      {/* <Heading as='h1' mt='2' size='2xl'>
        Listen and Forget
      </Heading> */}
      <Header />
      <Routes />
      <Footer />
    </Flex>
  );
}

export default App;
