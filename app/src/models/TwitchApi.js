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
}

export default TwitchApi;
