import React from "react";
import { Flex } from "@chakra-ui/layout";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Recorder from "../components/Recorder";

const Dashboard = () => {
  return (
    <>
      <Flex w={"100vw"} justifyContent={"center"} alignItems={"center"}>
        <Sidebar />
        <Header />
        <Recorder />
      </Flex>
    </>
  );
};

export default Dashboard;
