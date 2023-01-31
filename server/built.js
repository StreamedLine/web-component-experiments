const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../client/build')});
});

app.listen(port, () => {
  console.log(path.join(__dirname, '../client/build'))
  console.log(`Started server; Listening on port ${port}`);
});
