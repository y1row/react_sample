import React, {Component} from 'react';
import TwitchApi from '../models/TwitchApi'

class TopGames extends Component {

  constructor(props) {
    super(props);
    this.state = {games: []};

    new TwitchApi().getTopGames().then(games => {
      console.log(games);
      this.setState({games: games});
    });
  }

  render() {

    const names = this.state.games.map(it => {
      return (
        <li key={it.id}>
          {it.name}
          <img src={it.box_art_url.replace("{width}", 182).replace("{height}", 242)} alt={it.name} />
        </li>
      )
    });

    return <ul>{names}</ul>;
  }
}

export default TopGames;