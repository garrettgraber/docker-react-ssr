const React = require('react');
const renderToString = require('react-dom/server').renderToString;

// import { renderToString } from "react-dom/server"



const ReactDOMServer = require('react-dom/server');


console.log("Server middleware is running...");

const App = require('../src/components/app.jsx').default;
const StaticRouter = require('react-router-dom').StaticRouter;
const Template = require('./template.jsx');


// const StaticRouterMarkup = (req, context) => {
//     return (<App />);
// };


module.exports = function serverRenderer(req, res,  next) {
    console.log("Server side render has occurred.");

    return (req, res, next) => {
        const context = {};

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


        // const markup = renderToString(StaticRouterMarkup());

        // res.status(200).send(Template({
        //     markup: markup,
        // }));
        next();
    };
};