import useRecordingsList from "../hooks/use-recordings-list";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { Box, Heading, Flex } from "@chakra-ui/layout";
import { useState } from "react";
import {addPlaylist} from "../SpotifyLogin"

export default function RecordingsList({ audio }) {
  const { recording, deleteAudio } = useRecordingsList(audio);
  const [song, setSong] = useState({});
  function searchSong() {
    var form = new FormData();
    form.append("api_token", process.env.REACT_APP_AUDD_API_KEY);
    form.append("file", recording.audio);
    form.append("return", "spotify");
    var configs = {
      headers: {
        "content-type": "multipart/formdata",
      },
    };
    axios
      .post("https://api.audd.io/", form, configs)
      .then(async (response) => {
        var res = response.data;
        if (res.status === "success") {
          setSong(res);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => deleteAudio());
  }

  return (
    <Flex mt='4' justify='center' flexDir='column'>
      <Button
        colorScheme={recording.audio ? "green" : "gray"}
        onClick={searchSong}
        disabled={!recording.audio}
      >
        search Song
      </Button>

      {song.status === "success" ? (
        song.result ? (
          <Flex flexDir='column' alignItems='center'>
            <Heading>YEE!! We find it. ❤️</Heading>
            <Flex>
              <Heading>Song name is&nbsp; </Heading>
              <Heading color='teal'> {song.result.title}</Heading>
            </Flex>
            <Button colorScheme='telegram' onClick ={
              () => {
                addPlaylist([song.result.spotify.uri])
              }
            }mt='4'>
              Add to spotify playlist
            </Button>
          </Flex>
        ) : (
          <Box>Oops! not able to find please try again</Box>
        )
      ) : (
        <></>
      )}
    </Flex>
  );
}
