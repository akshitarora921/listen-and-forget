import RecorderControls from "./RecorderControls";
import RecordingsList from "./RecordingsList";
import useRecorder from "../hooks/useRecorder";
import { Flex } from "@chakra-ui/react";
// import "./app.css";

export default function Recorder() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <Flex flexDir='column' align='center'>
      <RecorderControls
        recorderState={recorderState}
        handlers={handlers}
        audio={audio}
      />
      <RecordingsList audio={audio} />
    </Flex>
  );
}
