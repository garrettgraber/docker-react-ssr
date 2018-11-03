

export default ({ markup, req, content }) => {
	return `<!doctype html>
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
		    <div id="app">${markup}</div>
		    <script src='client.js'></script>
		  </body>
		</html>`;
};


