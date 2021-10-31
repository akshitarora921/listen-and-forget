import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import Recorder from "../components/Recorder";
import { addPlaylist } from "../SpotifyLogin";
const BASEURL="https://accounts.spotify.com/authorize";
const Client_ID=process.env.REACT_APP_SPOTIFY_CLIENT_ID


function Home() {
  

 
  
  return (
    <Flex flexDir='column' justify='center' alignItems='center'>
      <Button
        onClick={() => {
         
          if(localStorage.getItem("Login-Status")==="LogedIn"){
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            localStorage.setItem("Login-Status","Logedout")
         
          }
          
        else if(localStorage.getItem("Login-Status")==="Logedout" ||localStorage.getItem("Login-Status")===null ){
            
          window.open(BASEURL+"?client_id="+Client_ID+"&response_type=code&redirect_uri="+process.env.REACT_APP_SPOTIFY_REDIRECT+"&show_dialog=true&scope=ugc-image-upload playlist-modify-private playlist-read-private user-read-private user-read-playback-state user-library-modify user-read-playback-position user-read-recently-played user-modify-playback-state user-read-currently-playing playlist-read-collaborative user-library-read streaming user-top-read", "_self");
         
        }}}
       
      >
      Login With Spotify 
      </Button>
      <Recorder />
      <Button onClick={()=>{
        addPlaylist(["spotify:track:444Xp2WWzTQREUznLf5xVF"])
      }}>add song</Button>
    </Flex>
  );
}

export default Home;
