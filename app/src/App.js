import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopGames from './components/TopGames';
import TwitchStreamer from './components/TwitchStreamer'
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">俺Twitch</h1>
        </header>
        {/*<TwitchStreamer name="spygea"/>*/}
        <TwitchStreamer name="spygea"/>
        {/*<ReactTwitchEmbedVideo channel="shroud"/>*/}
        {/*<TopGames/>*/}

      </div>
    );
  }
}

export default App;
