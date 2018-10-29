'use strict';

console.log("Running express Static server");



const http = require('http'),
      path = require('path'),
      express = require('express'),
      request = require('request'),
  	  bodyParser = require('body-parser'),
  	  cors = require('cors'),
  	  compression = require('compression'),
      ip = require('ip');


const NODE_ENV = process.env.NODE_ENV || 'development';
const port = 8082;
const hostname = 'localhost';
const buildPath = path.resolve('../dist');
const bundlePath = path.resolve('../dist/index.html');


console.log("NODE_ENV: ", NODE_ENV);
console.log("buildPath: ", buildPath);
console.log("bundlePath: ", bundlePath);



// const hostname = ip.address();
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(buildPath));

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const config = require('../webpack.config.babel.js');

const compiler = webpack(config);

const middleware = webpackDevMiddleware(compiler, {
  noInfo: false,
  serverSideRender: true
});

app.use(middleware);

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));

// app.use(webpackHotServerMiddleware(compiler, {
//   serverRendererOptions: {
//     foo: 'Bar'
//   }
// }));






 

app.get('/', function(req, res) {
  console.log("\nCALL made to webpack!");
  console.log("buildPath: ", buildPath);
  // console.log("bundlePath: ", bundlePath);
  // console.log('==> 🌎 Listening on port. Open up http://' + hostname + ':' + port);
  res.write(middleware.fileSystem.readFileSync(bundlePath));
  res.end();
  // res.sendFile(bundlePath);
  // res.send('Base has been hit');
});


app.get('/gator', function(req, res) {
    console.log("Gator call has occurred");
    res.send('An alligator approaches!');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = app.listen(port, hostname, function onStart(err) {
  console.log("hostname: ", hostname);
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://' + hostname + ':%s/ in your browser.', port, port);
});

server.keepAliveTimeout = 60000 * 2;
