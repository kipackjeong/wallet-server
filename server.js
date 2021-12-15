const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const connectDB = require("./db/db");
const app = express();
const port = 3000;
// load env var
dotenv.config({ path: "./config/config.env" });

// connect db
connectDB();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
	console.log(
		`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});
