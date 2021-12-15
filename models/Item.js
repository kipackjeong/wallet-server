const mongoose = require("mongoose");
const mongooseSeed = require("mongoose-seed");

const ItemSchema = new mongoose.Schema({
	amount: {
		type: Number,
		required: [true, "Please add amount"],
		unique: false,
		min: [0, "Amount can't be negative number"],
	},
	category: {
		type: mongoose.Schema.ObjectId,
		ref: "Category",
		required: true,
	},
	week: {
		type: mongoose.Schema.ObjectId,
		ref: "Week",
		required: true,
	},
	description: {
		type: String,
		required: [true, "Please add description"],
		unique: false,
		trim: true,
		maxLength: [50, "Description can't be longer than 50 characters"],
	},
	location: {
		type: String,
		required: [false],
	},
});

module.exports = mongoose.model("Item", ItemSchema);
