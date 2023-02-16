import styles from "@/styles/Funcionamiento.module.css"
import Image from "next/image"
import { useState } from "react"
import { InView } from "react-intersection-observer"

const Funcionamiento = () => {
	const [headingInView, setHeadingInView] = useState(false)
	const [paso1InView, setPaso1InView] = useState(false)
	const [paso2InView, setPaso2InView] = useState(false)
	const [paso3InView, setPaso3InView] = useState(false)
	return (
		<section
			id="funcionamiento"
			className={styles.funcionamiento}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className={styles.funcionamiento__wave}
			>
				<path
					fill="#800080"
					fillOpacity="1"
					d="M0,128L720,256L1440,96L1440,320L720,320L0,320Z"
				></path>
			</svg>
			<InView
				as="div"
				onChange={setHeadingInView}
				triggerOnce
			>
				<h1
					className={`${styles.funcionamiento__heading} ${
						headingInView ? "fade" : "oculto"
					}`}
				>
					¿Cómo funciona?
				</h1>
			</InView>
			<div className={styles.funcionamiento__grid}>
				<InView
					as={"div"}
					onChange={setPaso1InView}
					className={paso1InView ? "comed" : "oculto"}
				>
					<p>Ubicarte en la seccion de acortar</p>
					<Image
						src={"/img/paso_1.png"}
						height={200}
						width={500}
					/>
				</InView>
				<InView
					as={"div"}
					onChange={setPaso2InView}
					className={paso2InView ? "comei" : "oculto"}
				>
					<p>Colocar la URL que deseas acortar</p>
					<Image
						src={"/img/paso_2.png"}
						height={200}
						width={500}
					/>
				</InView>
				<InView
					as={"div"}
					onChange={setPaso3InView}
					className={paso3InView ? "comed" : "oculto"}
				>
					<p>A la derecha aparecerá tu nuevo enlace.</p>
					<Image
						src={"/img/paso_3.png"}
						height={200}
						width={500}
					/>
				</InView>
			</div>
		</section>
	)
}
export default Funcionamiento
