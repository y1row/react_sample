import React, { Component } from 'react';
import TwitchApi from '../models/TwitchApi'

class TwitchStreamer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      stream: {},
      videos: []
    };

    const api = new TwitchApi();
    api.getUser(props.name).then(user => {
      // this.setState({user: user});
      console.log(user);
      Promise.all([
        //api.getStreamByName(user.login),
        api.getVideos(user.id)
      ]).then(res => {
        console.log(res);
      })
    });

    new TwitchApi().getStreamByName(props.name).then(stream => {
      this.setState({stream: stream});
    });
  }

  render() {
    //console.log(this.state.user);
    return (
      <div>{this.state.user ? this.state.user.display_name : ''}</div>
    );
  }
}

export default TwitchStreamer;