import {Link} from "react-router-dom";

function Standings() {
    getStandings();

    return (
        <div>
            Standings!
        </div>
        )
}

function getStandings() {
    fetch('http://localhost:4200/standings')
    .then(res => res.json())
    .then(res => console.log(res));
}

export default Standings


