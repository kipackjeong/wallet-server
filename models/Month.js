const mongoose = require("mongoose");

const MonthSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Month should have name."],
		unique: true,
		trim: true,
		maxLength: [10, "Month name can't be longer than 10 characters."],
	},
	year: {
		type: Number,
		default: new Date(Date.now()).getFullYear(),
		required: [true, "Month should have year"],
	},
	budget: {
		type: Number,
		default: 0,
		required: [false],
	},
});

module.exports = mongoose.model("Month", MonthSchema);
