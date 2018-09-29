import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopGames from './components/TopGames';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">俺Twitch</h1>
        </header>
        <p className="App-intro">
          今熱いゲーム
        </p>
        <TopGames/>
      </div>
    );
  }
}

export default App;
