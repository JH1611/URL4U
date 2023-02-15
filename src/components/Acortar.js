import styles from "@/styles/Acortar.module.css"
import randomString from "@/utils/randomString"
import { Box, Button, CircularProgress, Popper } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"

const Acortar = () => {
	const [url, setUrl] = useState("")
	const [shortUrl, setShortUrl] = useState("")
	const [loading, setLoading] = useState(false)

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = event => {
		if (window) {
			navigator.clipboard.writeText(
				`${window.location.href.split("#")[0]}${shortUrl}`
			)
		}
		setAnchorEl(anchorEl ? null : event.currentTarget)
	}

	const open = Boolean(anchorEl)
	const id = open ? "simple-popper" : undefined
	const handleSubmit = async e => {
		e.preventDefault()

		if (!url) {
			return
		}

		setLoading(true)
		const res = await fetch("/api/acortar", {
			method: "POST",
			body: JSON.stringify({ originalUrl: url, shortUrl: randomString() }),
		})
		const data = await res.json()
		setShortUrl(data.shortUrl)
		setUrl("")
		setLoading(false)
	}

	return (
		<section
			id="acortar"
			className={styles.acortar}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className={styles.acortar__wave}
			>
				<path
					fill="#f7f7f7"
					fillOpacity="1"
					d="M0,256L80,261.3C160,267,320,277,480,245.3C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</svg>
			<h1 className={styles.acortar__heading}>Acortar</h1>
			<div className={styles.acortar__contenedor}>
				<form
					onSubmit={handleSubmit}
					className={styles.acortar__form}
				>
					<input
						type="url"
						name="url"
						value={url}
						placeholder="Pega tu url aquí"
						onChange={e => setUrl(e.target.value)}
						className={styles.acortar__input}
					/>
					<Button
						variant="contained"
						type="submit"
						style={{ fontSize: "2rem", display: "block", marginInline: "auto" }}
					>
						Generar enlace corto
					</Button>
				</form>
				<div className={styles.acortar__link}>
					{loading ? (
						<CircularProgress />
					) : shortUrl && window ? (
						<>
							<h3 className={styles.acortar__info}>{`${
								window.location.href.split("#")[0]
							}${shortUrl}`}</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={styles.acortar__icon}
								width={24}
								height={24}
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								onClick={handleClick}
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								></path>
								<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
								<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
							</svg>
							<Popper
								id={id}
								open={open}
								anchorEl={anchorEl}
							>
								<Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
									¡Copiado!
								</Box>
							</Popper>
						</>
					) : (
						<h3 className={styles.acortar__info}>Tu url aparecerá aquí.</h3>
					)}
				</div>
			</div>
		</section>
	)
}
export default Acortar
