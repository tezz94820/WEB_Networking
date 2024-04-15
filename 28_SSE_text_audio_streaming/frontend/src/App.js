import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [textData, setTextData] = useState('');
  const [fetchTextData, setfetchTextData] = useState(false);
  const [audioStream, setAudioStream] = useState(null);

  useEffect(() => {
    if (fetchTextData) {
      const eventSource = new EventSource('http://localhost:5000/api/text');

      eventSource.onmessage = (event) => {
        setTextData(prevData => prevData + event.data);
      }

      return () => {
        eventSource.close();
      }
    }
  }, [fetchTextData]);


  const handleSendTextData = () => {
    setfetchTextData(true);
  }

  const handleClearTextData = () => {
    setTextData('');
    setfetchTextData(false);
  }

  const startAudioStream = () => {
    const audio = new Audio('http://localhost:5000/api/audio');
    audio.play();
    // setAudioStream(audio);
  };


  const stopAudioStream = () => {
    if (audioStream) {
      audioStream.pause();
      audioStream.src = '';
      setAudioStream(null);
    }
  };


  return (
    <div className="App">
      <h1>Text Stream</h1>
      <button onClick={handleSendTextData} >Stream Text</button>
      <button onClick={handleClearTextData} >Clear Text</button>
      <h3>{textData}</h3>

      <h1>Audio Stream</h1>
      {audioStream ? (
        <button onClick={stopAudioStream}>Stop Audio</button>
      ) : (
        <button onClick={startAudioStream}>Stream Audio</button>
      )}
    </div>
  );
}

export default App;
