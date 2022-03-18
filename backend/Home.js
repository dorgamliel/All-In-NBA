const httpGetter = require("./HttpGetter");
const highlights = require("./Highlights");
const allTeams = [{short: "ATL", name:"Atlanta Hawks"}, {short: "BOS", name: "Boston Celtics"},
    {short: "CHA", name:"Charlotte Hornets"}, {short: "CHI", name:"Chicago Bulls"},
    {short: "CLE", name:"Cleveland Cavaliers"}, {short: "DAL", name:"Dallas Mavericks"},
    {short: "DEN", name:"Denver Nuggets"},
    {short: "DET", name:"Detroit Pistons"}, {short: "GSW", name:"Golden State Warriors"},
    {short: "HOU", name:"Houston Rockets"}, {short: "IND", name:"Indiana Pacers"},
    {short: "LAC", name:"Los Angeles Clippers"}, {short: "LAL", name:"Los Angeles Lakers"},
    {short: "MEM", name:"Memphis Grizzlies"}, {short: "MIA", name:"Miami Heat"},
    {short: "MIL", name:"Milwaukee Bucks"}, {short: "MIN", name:"Minnesota Timberwolves"},
    {short: "NOP", name:"New Orleans Pelicans"}, {short: "NYK", name:"New York Knicks"},
    {short: "BKN", name:"Brooklyn Nets"}, {short: "OKC", name:"Oklahoma City Thunder"},
    {short: "ORL", name:"Orlando Magic"}, {short: "PHI", name:"Philadelphia 76ers"},
    {short: "PHX", name:"Phoenix Suns"}, {short: "POR", name:"Portland Trail Blazers"},
    {short: "SAC", name:"Sacramento Kings"}, {short: "TOR", name:"Toronto Raptors"},
    {short: "UTH", name:"Utah Jazz"}, {short: "WAS", name:"Washington Wizards"}];

async function getTodaysTeams() {
    const todaysTeams = [];
    const todaysDate = getTodaysDate();
    return await httpGetter.getContent('data.nba.net', `/prod/v1/${todaysDate}/scoreboard.json`)
    .then((res) => {
        res.games.forEach(element => {
            todaysTeams.push(element.hTeam.triCode, element.vTeam.triCode);
        });

        return highlights.getHighlights(true);
    }).then((res) => {
        const z = allTeams.find(team => team.short === 'ORL');
        const x = allTeams.find(team => team.short === 'ORL').name;
        const y = res[x];

        let teamsAndVids = todaysTeams.map(teamAbbrev => ({teamName: teamAbbrev, video: res[allTeams.find(team => team.short === teamAbbrev).name]}));
        // let teamsAndVids = todaysTeams.map(teamAbbrev => ({teamName: teamAbbrev, video: res[allTeams.find(team => team.short === teamAbbrev)]}));

        return teamsAndVids;
    });
}

function getTodaysDate() {
    const dateObj = new Date();
    const month = ('0' + (dateObj.getUTCMonth() + 1)).slice(-2); //months from 1-12
    const day = ('0' + (dateObj.getUTCDate() - 1)).slice(-2);;
    const year = dateObj.getUTCFullYear();
    return `${year}${month}${day}`;
}

module.exports = {
    getTodaysTeams
  }