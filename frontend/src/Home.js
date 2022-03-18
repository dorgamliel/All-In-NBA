import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


function Home() {

    const [favoriteTeam, setFavoriteTeam] = useState('');
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
    {short: "PHO", name:"Phoenix Suns"}, {short: "POR", name:"Portland Trail Blazers"},
    {short: "SAC", name:"Sacramento Kings"}, {short: "TOR", name:"Toronto Raptors"},
    {short: "UTH", name:"Utah Jazz"}, {short: "WAS", name:"Washington Wizards"}];

    const teamInListOfTeams = (teamName) => {
        for (let team of allTeams) {
            if (team.short === teamName) {
                return true;
            }
        }
        return false;
    }

    const getTeamHighlights = (e) => {
        e.preventDefault();
        const chosenTeam = e.target.elements.teamsList.value;
        const fullName = e.target.elements.teamsList.value;

        if (!teamInListOfTeams(chosenTeam)) return;

        localStorage.setItem('favoriteTeam', chosenTeam);

        fetch('http://localhost:4200/todaysTeams')
        .then(res => res.json())
        .then(res => {
            for (let team of res) {
                if (team.teamName === chosenTeam) {
                    setFavoriteTeam({name: team.teamName, video: team.video.replace('watch?v=', 'embed/')});
                    return;
                }
            }

            setFavoriteTeam('');
            return;
        });
    }

    useEffect(() => {
        if (localStorage.getItem('favoriteTeam')) {
            setFavoriteTeam(localStorage.getItem('favoriteTeam'));
        }
    }, [])

    useEffect(() => {
        getTeamHighlights.bind(this);
    }, [favoriteTeam])

    return (
        <div>
            {/* Choose favorite team
            show team highlights
            show team leading scorer

            show league highlights
            show best players of tonight */}
            <div>See Highlights of {favoriteTeam.name}</div>
            <form onSubmit={getTeamHighlights.bind(this)}>
                <select name="teamsList" id="teamsList">
                    {
                        allTeams.map(el => <option value={el.short} key={el.short}>{el.name}</option>)
                    }
                </select>
                <input type="submit" value='Submit'></input>
            </form>
            <iframe src={favoriteTeam.video}></iframe>
        </div>
        )
}



export default Home


