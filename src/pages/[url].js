import UrlModel from "@/mongo/urlModel"
import conectarDB from "@/utils/conectarDB"
import styles from "@/styles/Url.module.css"
import { CircularProgress } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Url = ({ url }) => {
	const router = useRouter()
	useEffect(() => {
		if (window && url) {
			window.location.href = url
		} else {
			router.push("/")
		}
	}, [])
	return (
		<section className={styles.url}>
			<CircularProgress size={"7rem"} />
		</section>
	)
}
export default Url

export async function getServerSideProps(context) {
	const db = await conectarDB()
	const url = context.query.url
	const data = await UrlModel.findOne({ shortUrl: url })
	await db.disconnect()
	return {
		props: {
			url: data.originalUrl,
		},
	}
}
