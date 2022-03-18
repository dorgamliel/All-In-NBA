const { highlightsF, standingsF, injuriesF, gamesCount, todaysTeams } = require('./DataCollector');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
    highlightsF().then((data) => {
        res.send(data);
    })
});

app.get('/standings', function(req, res) {
    standingsF().then((data) => {
        res.send(data);
    })
});

app.get('/injuries', function(req, res) {
    injuriesF().then((data) => {
        res.send(data);
    })
});

app.get('/highlights', function(req, res) {
    highlightsF().then((data) => {
        res.send(data);
    })
});

app.get('/todaysTeams', function(req, res) {
    todaysTeams().then((data) => {
        res.send(data);
    })
});

// start the server listening for requests
app.listen(process.env.PORT || 4200, 
	() => console.log("Server is running..."));