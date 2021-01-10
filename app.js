const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Things are not good as I am having a very hard time understanding this thing'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
