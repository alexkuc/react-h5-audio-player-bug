import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  return (
    <AudioPlayer
      autoPlay
      src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
      onPlay={(e) => console.log('onPlay')}
      // other props here
    />
  );
}

export default App;
