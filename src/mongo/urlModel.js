import mongoose, { Schema, model } from "mongoose"

const UrlSchema = new Schema({
	originalUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
})

const UrlModel = mongoose.models.Url || model("Url", UrlSchema)

export default UrlModel
