import React from "react";
import { Flex } from "@chakra-ui/layout";
import Header from "../components/dashboard/Header";
import Recorder from "../components/Recorder";

const Dashboard = () => {
  return (
    <>
      <Flex w={"100vw"} justifyContent={"center"} alignItems={"center"}>
        <Header />
        <Recorder />
      </Flex>
    </>
  );
};

export default Dashboard;
