const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://heroku_0jz4nl8w:svtngvls4e5ukppavh9j3q3cv9@ds255347.mlab.com:55347/heroku_0jz4nl8w",
{ useNewUrlParser: true, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> Server now listening on ${PORT}!`);
});
