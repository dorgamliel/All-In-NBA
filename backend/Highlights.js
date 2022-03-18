require('isomorphic-fetch');

async function fetchData() {
    const response = await fetch('https://www.youtube.com/playlist?list=PLGhYnSIdMJtPcrd6nNfUx1XGGUFu2gkHl');
    const highlights = await response.text();
    return highlights;
}

function parseToSet(htmlContent) {
    const htmlSplitted = htmlContent.split('videoId":"');
    const videos = new Set();
    const teamsNames = new Set();
    for (let i=1; i<htmlSplitted.length; i++) {
        if (i % 3 === 1)
            teamsNames.add(htmlSplitted[i].split('"title":{"runs":[{"text":"')[1].split(' - ')[0]);
        videos.add("https://www.youtube.com/watch?v=" + htmlSplitted[i].split("\"")[0]);
        if (videos.size == 10) {
            break;
        }
    }
    const vids = Array.from(videos);

    const teamsAndVids = {};
    for (let i=0; i<vids.length; i++) {
        const team1 = Array.from(teamsNames)[i].split(' vs ')[0];
        const team2 = Array.from(teamsNames)[i].split(' vs ')[1];
        if (!teamsAndVids[team1]) teamsAndVids[team1] = vids[i];
        if (!teamsAndVids[team2]) teamsAndVids[team2] = vids[i];
    }
    return teamsAndVids;
}

async function getHighlights(teams = false) {
    return new Promise((resolve) => {
        fetchData().then(htmlContent => {
            let res;
            if (teams) {
                res = parseToSet(htmlContent);
            } else {
                res = (Object.values(parseToSet(htmlContent)));
            }
            resolve(res);
        })
    })
}

module.exports = {
    getHighlights
    }