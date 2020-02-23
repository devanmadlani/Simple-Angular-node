const express = require('express');
const path = require('path');
let workingDir = '../dist/dunda';
const app = express();

app.use(express.static(path.join(__dirname, workingDir)));

app.use("node_modules", express.static(path.join(__dirname, '../node_modules')));

app.listen({ port: 8082 }, () => {
});

app.get('/*', function (req, res) {
    app.use("/node_modules", express.static(path.join(__dirname, '../node_modules')));
    res.sendFile('index.html', { root: path.join(__dirname, workingDir) });
  });