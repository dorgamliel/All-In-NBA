const injuries = require("./InjuredPlayers.js");
const standings = require("./leagueStandings.js");
const highlights = require("./Highlights.js");
const todaysData = require("./TodaysData");
const home = require("./Home");

async function injuriesF() {
    return new Promise((resolve) => {
        injuries.getInjuries().then((res) => {
            resolve(res); 
        });
    })
} 

async function standingsF() {
    return new Promise((resolve) => {
        standings.getStandings().then((res) => {
            resolve(res); 
        });
    })
} 

async function highlightsF() {
    return new Promise((resolve) => {
        highlights.getHighlights().then((res) => {
            resolve(res); 
        });
    })
}

async function gamesCount() {
    return new Promise((resolve) => {
        todaysData.getGamesCount().then((res) => {
            resolve(res); 
        });
    })
}

async function todaysTeams() {
    return new Promise((resolve) => {
        home.getTodaysTeams().then((res) => {
            resolve(res); 
        });
    })
}

module.exports = {
    highlightsF,
    standingsF,
    injuriesF,
    gamesCount,
    todaysTeams
}