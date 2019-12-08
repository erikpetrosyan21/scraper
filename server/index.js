const myFunctions = require('./helpers/functions');

(async function main() {
   const DATA = await myFunctions.readFileAndConvertArray('nor_data.json');
   await myFunctions.createServer(3000);
   myFunctions.connectAndSendDataInClient('ScrapData', DATA);
})();