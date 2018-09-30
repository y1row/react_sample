import TwitchHelix from 'twitch-helix';

class TwitchApi {

  constructor() {
    this.caller = new TwitchHelix({
      clientId: "9yau08rhfn8v0kx2iu9dqlh8f2xzkz",
      clientSecret: "y4fl0qqqb30cezhdif7j7xnn81z2dm"
    });
  }

  getTopGames() {
    return this.caller.sendHelixRequest("games/top");
  }

  getUser(name) {
    return this.caller.getTwitchUserByName(name);
  }

  getStreamByName(name) {
    return this.caller.getStreamInfoByUsername(name);
  }

  getVideos(user_id) {
    return this.caller.sendHelixRequest(`videos?user_id=${user_id}&type=archive`);
  }

}

export default TwitchApi;
