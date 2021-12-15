const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Category should have name."],
		unique: true,
		trim: true,
		maxLength: [20, "Category name can't be longer than 20 characters."],
	},
	budget: {
		type: Number,
		required: [false],
	},
});

module.exports = mongoose.model("Category", CategorySchema);
