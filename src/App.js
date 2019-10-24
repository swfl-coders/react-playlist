import React from 'react';
import YouTube from 'react-youtube';
import './App.css';

const App = () => {
  const onReady = (event) => {
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

    return (
      <div className="App">
        <header className="App-header">
          <p>SWFL Coders Playlist</p>
        </header>
          <YouTube
            videoId="mWkfkHOb4P0"
            opts={opts}
            onReady={onReady}
          />
      </div>
    );
}

export default App;