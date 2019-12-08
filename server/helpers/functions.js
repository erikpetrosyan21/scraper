const fs = require('fs');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
    pingTimeout: 60000,
});

// -- Read file and converting to array. --

const readFileAndConvertArray = async (fileName) => {
    try {
        const readingFile = await fs.readFileSync(`../data/${fileName}`);
        return JSON.parse(readingFile);
    } catch (err) {
        console.log(err);
    }
}

// -- Create server and listen port. --

const createServer = async (port) => {
    try {
        http.listen(port, function () {
            console.log(`listening on *:${port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

// -- Connect web socket and send data (socket.io emit). --

const connectAndSendDataInClient = async (emitName,dataArray) => {
    try {
        io.on('connection', (socket) => {
            console.log(`User coonetion in server user id :${socket.id}`);
            socket.emit(emitName, dataArray);
        });
    } catch (err) {
        console.log(err);
    }
}

exports.readFileAndConvertArray = readFileAndConvertArray;
exports.createServer = createServer;
exports.connectAndSendDataInClient = connectAndSendDataInClient;