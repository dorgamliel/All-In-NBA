const httpGetter = require("./HttpGetter");
const parser = require('node-html-parser');
const rp = require('request-promise');

async function getInjuries1() {
    return new Promise((resolve) => {
        let res = httpGetter.getContent('www.fantasylabs.com', '/api/players/news/2/');
        resolve(res);
        }) 
}

async function getInjuries() {
  return new Promise((resolve) => {
    rp('https://www.cbssports.com/nba/injuries/')
    .then(html => {
      const root = parser.parse(html);
      const injuries = [];

      root.querySelectorAll('tr').forEach(elm => {
        const name = elm.querySelector('.CellPlayerName--long')?.querySelector('a').textContent;
        const date = elm.querySelector('.CellGameDate')?.textContent.trim();
        const injury = elm.querySelectorAll('td')[3]?.textContent.trim();
        const status = elm.querySelectorAll('td')[4]?.textContent.trim();

        if (name && date && injury && status) {
          injuries.push({name: name, date: date, injury: injury, status: status});
        }
      })
      console.log('injuries: ', injuries);
      resolve(injuries);
    })



      // let res = httpGetter.getContent('www.fantasylabs.com', '/api/players/news/2/');
      // resolve(res);
      }) 
}


module.exports = {
  getInjuries
}