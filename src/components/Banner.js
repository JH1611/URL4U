import styles from "@/styles/Banner.module.css"
import { Button } from "@mui/material"
const Banner = () => {
	return (
		<main className={styles.banner}>
			<h1 className={styles.banner__heading}>
				Acorta enlaces y <span>mejora tu UX.</span>
			</h1>
			<div className={styles.banner__botones}>
				<Button
					variant="contained"
					href="#acortar"
					style={{ fontSize: "2rem" }}
				>
					Comenzar
				</Button>
				<Button
					variant="outlined"
					style={{ fontSize: "2rem" }}
					href="#funcionamiento"
				>
					¿Cómo funciona?
				</Button>
			</div>
		</main>
	)
}
export default Banner
