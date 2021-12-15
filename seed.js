const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const seeder = require("mongoose-seed");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	autoIndex: false,
});
// Read JSON files
const items = JSON.parse(
	fs.readFileSync(`${__dirname}/mockData/items.json`, "utf-8")
);
const categories = JSON.parse(
	fs.readFileSync(`${__dirname}/mockData/categories.json`, "utf-8")
);
const weeks = JSON.parse(
	fs.readFileSync(`${__dirname}/mockData/weeks.json`, "utf-8")
);
const months = JSON.parse(
	fs.readFileSync(`${__dirname}/mockData/months.json`, "utf-8")
);

// Create Json into DB
const createData = async () => {
	try {
		// Load models
		const Item = require(`./models/Item`);
		const Category = require(`${__dirname}/models/Category`);
		const Week = require(`${__dirname}/models/Week`);
		const Month = require(`${__dirname}/models/Month`);

		// await Item.create(items);
		// console.log("Items seeding completed");
		// await Category.create(categories);
		// console.log("Categories seeding completed");
		await Week.create(weeks);
		console.log("Weeks seeding completed");
		// await Month.create(months);
		// console.log("Months seeding completed");
		process.exit();
	} catch (error) {
		console.error(error.toString().red);
	}
};

// Delete data
const deleteData = async () => {
	try {
		await Item.deleteMany();
		await Category.deleteMany();
		await Week.deleteMany();
		await Month.deleteMany();

		process.exit();
	} catch (error) {
		console.error(error.red);
	}
};

try {
	if (process.argv[2] === "-i") {
		console.log("Creating data...".green.inverse);
		createData();
	} else if (process.argv[2] === "-d") {
		console.log("Deleting data".red.inverse);
		deleteData();
	}
} catch (err) {
	console.error(err);
}
