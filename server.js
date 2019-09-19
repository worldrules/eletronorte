const express = require('express');
const path = require('path');
const nomeApp = process.env.eletronorte;
const app = express();

app.use(express.static(__dirname + '/dist/eletronorte'));

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname + '/dist/eletronorte/index.html'));
});

app.listen(process.env.PORT || 8080);
