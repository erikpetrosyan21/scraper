const scrap = require('./helpers/scrap.js');

const URL = "https://www.nytimes.com/section/world";


(async function main() {
    let htmlContent = await scrap.getHtmlDom(URL);
    let text = await scrap.getTextInElement(htmlContent, '.e1xfvim30');

    console.log(text)
})();