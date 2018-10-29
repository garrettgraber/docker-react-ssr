


'use strict';

console.log("Running node.js");

const http = require('http'),
      path = require('path');

const express = require('express');
// const morgan = require('morgan');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(8082, () => console.log('Gator app listening on port http://localhost:8082'));