'use strict';

console.log("Running express SSR server");

const http = require('http'),
      path = require('path'),
      express = require('express'),
      request = require('request'),
  	  bodyParser = require('body-parser'),
  	  cors = require('cors'),
  	  compression = require('compression'),
      ip = require('ip');


const port = 8082;
// const hostname = 'localhost';
const hostname = ip.address();
const app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));



let webpack = require('webpack');


let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackHotServerMiddleware = require('webpack-hot-server-middleware');



let config = require('../webpack.config.babel.prod.js');


const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/',
  // serverSideRender: true
  // serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler, {
  publicPath: '/'
}));


const serverRenderer = require('../dist/server.js');
app.get('/', serverRenderer);




 

// app.get('/', function(req, res) {
//   console.log("\ncall made to webpack");
//   console.log("bundlePath: ", bundlePath);
//   console.log('==> 🌎 Listening on port. Open up http://' + hostname + ':' + port);
//   // res.write(middleware.fileSystem.readFileSync(bundlePath));

//   // res.sendFile(path.join(__dirname + '/dist/index.html'));
//   // res.send('Base has been hit');
// });


app.get('/gator', function(req, res) {
    res.send('An alligator approaches!');
});



const server = app.listen(port, hostname, function onStart(err) {
  console.log("hostname: ", hostname);
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://' + hostname + ':%s/ in your browser.', port, port);
});

server.keepAliveTimeout = 60000 * 2;
