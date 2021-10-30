import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../hooks/use-recordings-list";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { ffmpeg } from "ffmpeg";
import { fs } from "../handlers/recorder-controls";
// import fs from "fs";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  console.log(recordings);
  function searchSong() {
    var form = new FormData();
    // ffmpeg(recordings[0].audio)
    //   .format("mp3")
    //   .save("music.mp3")
    //   .on("end", async () => {
    form.append("api_token", "7269141d9e939973e076ed84543ea3ad");
    form.append("file", recordings[0].audio);
    form.append("return", "apple_music, spotify");
    var configs = {
      headers: {
        "content-type": "multipart/formdata",
      },
    };
    axios
      .post("https://api.audd.io/", form, configs)
      .then(async (response) => {
        var res = response.data;
        // if (res === "success") {
        //   await message.client.sendMessage(
        //     message.jid,
        //     `Título: ${res.title}\nArtista: ${res.artist}`,
        //     MessageType.text
        //   );
        console.log(res);
        // } else {
        //   await message.client.sendMessage(
        //     message.jid,
        //     "*Canción no encontrada...*",
        //     MessageType.text
        //   );
        // }
      })
      .catch((error) => {
        console.log(error);
      });
    // });
  }
  return (
    <div className='recordings-container'>
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <div className='recordings-list'>
            {recordings.map((record) => (
              <div className='record' key={record.key}>
                <audio controls src={record.audio} />
                <div className='delete-button-container'>
                  <button
                    className='delete-button'
                    title='Delete this audio'
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='no-records'>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            size='2x'
            color='#f2ea02'
          />
          <span>You don't have records</span>
        </div>
      )}
      <Button onClick={searchSong}>search Song</Button>
    </div>
  );
}
