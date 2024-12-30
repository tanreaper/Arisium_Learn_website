// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import VideoCountdown from "./components/VideoCountdown"
import SampleVideo from './assets/background.mp4';

function App() {
  return (
    <div>
      <VideoCountdown 
        videoSrc={SampleVideo} 
        targetDate="2024-12-31T23:59:59"
      />
    </div>
  );
}

export default App
