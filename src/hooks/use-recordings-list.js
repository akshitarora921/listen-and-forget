import { useState, useEffect } from "react";
import { deleteAudio } from "../handlers/recordings-list";
import generateKey from "../utils/generate-key";

export default function useRecordingsList(audio) {
  const [recording, setRecording] = useState({});

  useEffect(() => {
    if (audio) setRecording({ key: generateKey(), audio });
  }, [audio]);

  return {
    recording,
    deleteAudio: () => deleteAudio(setRecording),
  };
}
