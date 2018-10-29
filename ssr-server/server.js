const React = require('react');
const renderToString = require('react-dom/server').renderToString;

console.log("Server middleware is running...");

const App = require('../src/components/app.jsx').default;

module.exports = function serverRenderer(req, res,  next) {
    console.log("Server side render has occurred.");

    return (req, res, next) => {
        res.status(200).send(`
            <!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <!-- <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="theme-color" content="#000000">
                
                <link rel="shortcut icon" href="icons8-trinity-50.png" type="image/x-icon" >
                <base href="http://localhost:8082/">
                <title>SSR React Windows App</title>
              </head>
              <body>
                <div id="app">${renderToString(React.createElement(App))}</div>
                <script src='client.js'></script>
              </body>
            </html>
        `);
        next();
    };
}