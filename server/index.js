const myFunctions = require('./helpers/functions');

(async function main() {
   const DATA = await myFunctions.readFileAndConvertArray('12-6-2019-8:20-PM.json');
   console.log(DATA);
   await myFunctions.createServerAndConnectSocket(3000);
})();