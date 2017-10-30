This is a NodeJS application, currently using Express, EJS, and SocketIO.

Knowledge on HTML, JS, NodeJS, and Express is probably required.

-----IMPORTANT-----

To get started, you will need Node installed on your system.
Run "npm install" to generate node_module folder and dependencies.
To start server, go to root directory of this project and enter:
"node app.js"
To access the application, go to web browser and go to URL: "localhost:3000"
To add modules, use "npm install --save MODULENAMEHERE".
When using Git, don't push node_modules folder.

-----IMPORTANT-----

All routes to resources and get/post are inside of /routes/routes.js

Dynamic content can be served like this:
router.get('*', function(req, res){
  res.render('error', {message:connected_users});
});

Where "message" in error.ejs is:
<div>
	<h1><%= message %></h1>
</div>

Public folder should contain static files such as css, images, etc.
Views are found in the views folder, written in EJS, can be dynamic.

EJS works pretty much like regular HTML.

If you are having problems starting the Node server, make sure there isn't already a Node server process running.