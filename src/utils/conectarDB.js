import mongoose from "mongoose"

export default async function conectarDB() {
	return await mongoose.connect(process.env.MONGO_URI)
}
