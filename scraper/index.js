const scrap = require('./helpers/scrap.js');
const URL = "https://www.nytimes.com/section/sports";
const DATA = [];

(async function main() {
    const htmlContent = await scrap.getHtmlDom(URL);

    //-- To collect. --
    let title = await scrap.getTextInElement(htmlContent, '.e1xfvim30');
    let content = await scrap.getTextInElement(htmlContent, '.e1xfvim31');
    let imgUrl = await scrap.getImgUrlInElement(htmlContent, '.css-11cwn6f');

    DATA.push(
        { content: content },
        { title: title },
        { imgUrl: imgUrl },
    );

    //-- Convert to JSON. --
    scrap.arrayToJson(DATA);

})();


