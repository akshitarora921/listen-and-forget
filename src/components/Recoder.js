import RecorderControls from "./RecorderControls";
import RecordingsList from "./RecordingsList";
import useRecorder from "../hooks/useRecorder";
// import "./app.css";

export default function Recorder() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <section className='voice-recorder'>
      <h1 className='title'>Voice Recorder</h1>
      <div className='recorder-container'>
        <RecorderControls
          recorderState={recorderState}
          handlers={handlers}
          audio={audio}
        />
        <RecordingsList audio={audio} />
      </div>
    </section>
  );
}
