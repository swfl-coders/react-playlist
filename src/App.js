import React from 'react';
import YouTube from 'react-youtube'
import './App.css'

const App = () => {
  const onReady = (event) => {
    event.target.pauseVideo();
  }

  const opts = {
    width: '500',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

    return (
      <div className="App">
        <header className="App-header">
          <p>SWFL Coders Playlist</p>
        </header>
        <div className="cards-container">
          <div className="card">
            <YouTube
              videoId="mWkfkHOb4P0"
              opts={opts}
              onReady={onReady}
            />
              <h3>Added by: Zarela Graves</h3>
          </div>
          <div className="card">
            <YouTube
              videoId="huzalkQKRTw"
              opts={opts}
              onReady={onReady}
            />
              <h3>Added by: Zarela Graves</h3>
          </div>
          <div className="card">
            <YouTube
              videoId="dQw4w9WgXcQ"
              opts={opts}
              onReady={onReady}
            />
              <h3>Added by: Gabriel Boorse</h3>
          </div>
          <div className="card">
            <YouTube
              videoId="ZVMIk3xYaYo"
              opts={opts}
              onReady={onReady}
            />
              <h3>Added by: Fahmi</h3>
          </div>
        </div>
      </div>
    )
}

export default App