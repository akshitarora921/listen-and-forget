import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../hooks/use-recordings-list";
import { Button } from "@chakra-ui/button";
import axios from "axios";
// import "./styles.css";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  console.log(recordings);
  function searchSong() {
    axios
      .post("https://api.audd.io/", {
        api_token: "7269141d9e939973e076ed84543ea3ad",
        url: recordings[0].audio,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
