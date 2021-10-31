import { Box, Flex, Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Button } from "@chakra-ui/button";

const BASEURL = "https://accounts.spotify.com/authorize";
const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const Header = () => {
  return (
    <Flex justifyContent='space-between' width='100%' align='center'>
      {/* <Box>Listen and Forget</Box> */}
      <Flex minW='200px' p='3'>
        <Link as={RouterLink} to='/'>
          Home
        </Link>
        <Link ml='10' as={RouterLink} to='/about'>
          About us
        </Link>
      </Flex>
      {/* <Box>
        <Button
          onClick={() => {
            if (localStorage.getItem("Login-Status") === "LogedIn") {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              localStorage.setItem("Login-Status", "Logedout");
            } else if (
              localStorage.getItem("Login-Status") === "Logedout" ||
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
          }}
        >
          Login With Spotify
        </Button>
      </Box> */}
    </Flex>
  );
};

export default Header;
