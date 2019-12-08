const scrap = require('./helpers/scrap.js');
const URL = "https://habr.com/en/flows/design/";
const DATA = [];

(async function main() {
    const htmlContent = await scrap.getHtmlDom(URL);

    //-- To collect --
    let title = await scrap.getTextInElement(htmlContent, '.post__title');
    let content = await scrap.getTextInElement(htmlContent, '.post__text');
    let time = await scrap.getTextInElement(htmlContent, '.post__time');
    let imgUrl = await scrap.getImgUrlInElement(htmlContent,'.post__text img');

    DATA.push(
        { content: content },
        { title: title },
        { time: time },
        { imgUrl: imgUrl },
    );

    //-- Convert to JSON --
    scrap.arrayToJson(DATA,'nor_data');

})();


