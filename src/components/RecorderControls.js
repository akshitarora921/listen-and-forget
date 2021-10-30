import { FaMicrophone, FaStop, FaTimes } from "react-icons/fa";
import { formatMinutes, formatSeconds } from "../utils/format-time";
import { Box, Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
// import "./styles.css";

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className='controls-container'>
      <Box padding='4' pos='relative'>
        <Flex justify='center'>
          {formatSeconds(recordingSeconds) > 0 && (
            <>
              <span>{formatMinutes(recordingMinutes)}</span>
              <span>:</span>
              <span>{formatSeconds(recordingSeconds)}</span>
            </>
          )}
        </Flex>
        {formatSeconds(recordingSeconds) > 0 && (
          <Box position='absolute' right='0' top='0'>
            <IconButton
              colorScheme='gray'
              onClick={cancelRecording}
              icon={<FaTimes size='20px' />}
            ></IconButton>
          </Box>
        )}
      </Box>
      <Box textAlign='center'>
        {initRecording ? (
          <IconButton
            h='40'
            w='40'
            borderRadius='full'
            colorScheme='red'
            aria-label='stop-recording'
            title='Save recording'
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
            icon={<FaStop size='40px' />}
          ></IconButton>
        ) : (
          <IconButton
            h='40'
            w='40'
            borderRadius='full'
            aria-label='start-recording'
            colorScheme='blue'
            icon={<FaMicrophone size='40px' />}
            onClick={startRecording}
          ></IconButton>
        )}
      </Box>
    </div>
  );
}
