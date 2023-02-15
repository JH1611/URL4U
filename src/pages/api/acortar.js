import UrlModel from "@/mongo/urlModel"
import conectarDB from "@/utils/conectarDB"

export default async function handler(req, res) {
	const { method } = req
	switch (method) {
		case "GET":
			res.status(200).json({ name: "John Doe" })
			break
		case "POST":
			const db = await conectarDB()
			const created = await UrlModel.create(JSON.parse(req.body))
			res.status(201).json({ shortUrl: created.shortUrl })
			await db.disconnect()
			break
		default:
			res.status(405).json({ message: "Method Not Allowed" })
			break
	}
}
