import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

import React from "react";
import Recorder from "../components/Recorder";

const BASEURL = "https://accounts.spotify.com/authorize";
const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

function Home() {
  function SpotifyLogin() {
    if (localStorage.getItem("Login-Status") === "Logged-In") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.setItem("Login-Status", "Logged-Out");
    } else if (
      localStorage.getItem("Login-Status") === "Logged-Out" ||
      localStorage.getItem("Login-Status") === null
    ) {
      window.open(
        BASEURL +
        "?client_id=" +
        Client_ID +
        "&response_type=code&redirect_uri=" +
        process.env.REACT_APP_SPOTIFY_REDIRECT +
        "&show_dialog=true&scope=ugc-image-upload playlist-modify-private playlist-read-private user-read-private user-read-playback-state user-library-modify user-read-playback-position user-read-recently-played user-modify-playback-state user-read-currently-playing playlist-read-collaborative user-library-read streaming user-top-read",
        "_self"
      );
    }
  }
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 4 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {/* Listen<br/> & <br/> */}
          <Text as={"span"} color={"blue.500"}>
            LISTEN <br />
          </Text>
          <Text as={"span"} color={"grey.400"}>
            & <br />
          </Text>
          <Text as={"span"} color={"green.500"}>
            FORGET
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Identify the music playing around you and explore the music you love.
        </Text>
        <Stack
          direction={"column"}
          spacing={5}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          {localStorage.getItem("Login-Status") === "Logged-In" ? (
            <></>
          ) : (
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => SpotifyLogin()}
            >
              Login With Spotify
            </Button>
          )}
          <Recorder />

        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
