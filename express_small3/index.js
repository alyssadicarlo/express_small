const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = (request, response) => {
    response
        .status(200)
        .send("ROOT")
        .end();
}

const friendController = (request, response) => {
    let snippet = `Hello, `;

    const name = request.params.name;

    if (name === undefined) {
        snippet += `no one!`;
    } else {
        snippet += `${request.params.name}!`;
    }

    response
        .status(200)
        .send(snippet)
        .end();
}

app.get('/', rootController);
app.get('/greet/:name?', friendController);