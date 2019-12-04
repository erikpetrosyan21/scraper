const scrap = require('./helpers/scrap.js');
const URL = "https://www.nytimes.com/section/sports";
const DATA = [];

(async function main() {
    let htmlContent = await scrap.getHtmlDom(URL);

    //-- To collect --
    let title = await scrap.getTextInElement(htmlContent, '.e1xfvim30');
    let content = await scrap.getTextInElement(htmlContent, '.e1xfvim31');

    await DATA.push(
        { content: content },
        { title: title },
    );

    //-- Convert to JSON --
    scrap.arrayToJson(DATA)

})();


