import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, Heading } from "@chakra-ui/layout";
import Landing from "./components/Landing";
import About from "./components/aboutPage/About"
import Footer from "./Footer";

import Dashboard from "./components/dashboard/Dashboard";
// import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
     {/* <Flex justify='center'> */}
      <Button
        position='absolute'
        right='1'
        top='1'
        _focus={{ outline: "none" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      
       <Landing/>
       <About/> 
       <Footer/>
    {/* </Flex>  */}
      {/* <Dashboard/> */}
    </>
  );
}

export default App;
