const mongoose = require("mongoose");

const WeekSchema = new mongoose.Schema({
	month: {
		type: mongoose.Schema.ObjectId,
		required: [true, "Must have month_id"],
	},
	budget: {
		type: Number,
		default: 200,
		required: [false],
	},
});

module.exports = mongoose.model("Week", WeekSchema);
