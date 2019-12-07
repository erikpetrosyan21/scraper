const scrap = require('./helpers/scrap.js');
const URL = "https://www.nytimes.com/section/arts";
const DATA = [];

(async function main() {
    let htmlContent = await scrap.getHtmlDom(URL);

    //-- To collect --
    let title = await scrap.getTextInElement(htmlContent, '.e1xfvim30');
    let content = await scrap.getTextInElement(htmlContent, '.e1xfvim31');
    // let time = await scrap.getTextInElement(htmlContent, '.post__time');

    DATA.push(
        { content: content },
        { title: title },
        // { time: time },
    );

    //-- Convert to JSON --
    scrap.arrayToJson(DATA)

})();


