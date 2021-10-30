import React from "react";
import { Grid,GridItem ,Box, Container, Flex} from "@chakra-ui/layout";
import Card from "./Card"
import SidebarWithHeader from "./SidebarWithHeader"
const Dashboard = () => {
  return (
    <Container maxW="container.xl" p={'0'}>
        {/* <Flex h={'100vh'} py={'10'}> */}

            <SidebarWithHeader/>
            {/* <Card/> */}
        
    {/* <Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg="tomato" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={4} bg="tomato" />
</Grid> */}
    </Container>
  );
};

export default Dashboard;
