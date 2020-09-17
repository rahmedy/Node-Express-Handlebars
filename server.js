const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

// Parse application body as JSON
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine( 'handlebars',exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controller/burgers_controller.js');
app.use(routes);

// Start server
app.listen(PORT, function () {
    console.log('Server is listening on: http://localhost:' + PORT);
});