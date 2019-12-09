const myFunctions = require('./helpers/functions');

(async function main() {
   const DATA = await myFunctions.readFileAndConvertArray('12-9-2019-5:22-PM.json');
   await myFunctions.createServer(3000);
   myFunctions.connectAndSendDataInClient('ScrapData', DATA);
})();