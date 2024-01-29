const express = require('express');
const app = express();
const port = 3000;

let openConnections = {};

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.get('/subscribe/:channel', (req, res) => {
    // Save subscriber connection into openConnections object
    // If there are no subscribers for this channel, create an array
    if (!openConnections[req.params.channel]) {
        openConnections[req.params.channel] = [];
    }
    openConnections[req.params.channel].push(res);
    console.log(`New subscriber to channel ${req.params.channel}`);
});

app.get('/publish/:channel', (req, res) => {
    let counter = 0;
    // Send message to all subscribers
    openConnections[req.params.channel]?.forEach(connection => {
        // Check if connection is still open
        if (connection.writable) {
            counter++;
            // You can also keep the connection open for multiple publishes by replacing connection.end with connection.write, but it can get unstable as connections can still close by other networking related problems.
            connection.end('data: ' + req.query.message);
        }
    });

    // Remove all connections as you can't reuse them
    openConnections[req.params.channel] = [];

    console.log(`Sent message to ${counter} subscribers in channel ${req.params.channel}`);
    res.end(`Sent message to ${counter} subscribers`);	
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
