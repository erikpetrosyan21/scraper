const cheerio = require('cherio');
const scrap = require('./scrap.js');

const URL = "https://habr.com/en/all/";


(async function main (){
    let htmlContent = await scrap.getHtmlDom(URL);

    let time = await scrap.getTextInDom(htmlContent,'.post__time');
    let title = await scrap.getTextInDom(htmlContent,'.post__title');

    console.log(time)
})();