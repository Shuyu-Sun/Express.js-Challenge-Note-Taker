// Require Dependencies
const express = require('express');
var path = require('path');
var fs = require('fs');

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  