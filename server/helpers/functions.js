const fs = require('fs');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// -- Read file and converting to array. --

const readFileAndConvertArray = async (fileName) => {
    try {
        const readingFile = await fs.readFileSync(`../data/${fileName}`);
        return JSON.parse(readingFile);
    } catch (err) {
        console.log(err);
    }
}

// -- Create server and socket connection. --

const createServerAndConnectSocket = async (port) => {
    try {
        io.on('connection', (socket) => {
            console.log('a user connected');
        });

        http.listen(port, function(){
            console.log(`listening on *:${port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

exports.readFileAndConvertArray = readFileAndConvertArray;
exports.createServerAndConnectSocket = createServerAndConnectSocket;