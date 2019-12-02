const axios = require("axios");
const cheerio = require('cherio');

//-- Get htmlDom in url --
const getHtmlDom = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        return error;
    }
};

//-- Get element text in htmlDom --
const getTextInDom = async (content, classOrId) => {
    try {
        let $ = await cheerio.load(content);
        let elementText = await $(classOrId).text();
        return elementText;
    } catch (error) {
        return error;
    }
};

exports.getHtmlDom = getHtmlDom;
exports.getTextInDom = getTextInDom;
// console.log(getData('https://habr.com/en/all/'))
