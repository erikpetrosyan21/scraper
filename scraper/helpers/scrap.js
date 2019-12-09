const fs = require('fs');
const moment = require('moment');
const axios = require("axios");
const cheerio = require('cherio');
const { promisify } = require('util');


const appendFile = promisify(fs.appendFile);

// -- DEFAULT CONSTANTS--
const filename = moment().format('l LT').split('/').join('-').split(' ').join('-');
const defaultImg = 'https://habrastorage.org/getpro/habr/post_images/92f/75e/101/92f75e101123501119bab174b4cc5168.png';



// -- Get htmlDom in url. --
const getHtmlDom = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        return error;
    }
};

// -- Get element text in htmlDom. --
const getTextInElement = async (content, classOrId) => {
    try {
        let $ = await cheerio.load(content);
        let result = [];
        await $(classOrId).each((i, el) => {
            result.push($(el).text());
        });
        return result;
    }
    catch (error) {
        return error;
    }
};

// -- Get img url in htmlDom. --
const getImgUrlInElement = async (content, classOrId) => {
    try {
        let $ = await cheerio.load(content);
        let result = [];
        await $(classOrId).each((i, el) => {
            result.push($(el).attr('src'));
        });
        return result;
    }
    catch (error) {
        return error;
    }
};

// -- Check parent and get the img if it exists. --
const getImgUrlIfExist = async (content, parentEllement, yourEllement, defoultArgument = defaultImg) => {
    try {
        let $ = await cheerio.load(content);
        const result = [];

        await $(parentEllement).each((i, el) => {
            if ($(el).children(yourEllement).attr('src')) {
                result.push($(el).children(yourEllement).attr('src'));
            } else {
                result.push(defoultArgument);
            }
        });

        return result;
    }
    catch (error) {
        return error;
    }
};

// -- Convert array to JSON file. -- 
const arrayToJson = async (array, name = filename) => {
    try {
        let data = await JSON.stringify(array, null, 2);
        appendFile(`../data/${name}.json`, data);
    }
    catch (error) {
        return error;
    }
};


exports.getHtmlDom = getHtmlDom;
exports.getTextInElement = getTextInElement;
exports.getImgUrlInElement = getImgUrlInElement;
exports.getImgUrlIfExist = getImgUrlIfExist;
exports.arrayToJson = arrayToJson;