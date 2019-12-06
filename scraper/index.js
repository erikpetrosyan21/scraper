const scrap = require('./helpers/scrap.js');
const URL = "https://habr.com/en/all/";
const DATA = [];

(async function main() {
    let htmlContent = await scrap.getHtmlDom(URL);

    //-- To collect --
    let title = await scrap.getTextInElement(htmlContent, '.post__title');
    let content = await scrap.getTextInElement(htmlContent, '.post__text');
    let time = await scrap.getTextInElement(htmlContent, '.post__time');

    DATA.push(
        { content: content },
        { title: title },
        { time: time },
    );

    //-- Convert to JSON --
    scrap.arrayToJson(DATA)

})();


