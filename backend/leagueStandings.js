const httpGetter = require("./HttpGetter");

async function getStandings() {
    return await httpGetter.getContent('data.nba.net', '/prod/v1/current/standings_conference.json');
}

module.exports = {
    getStandings
  }