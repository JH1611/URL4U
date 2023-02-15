import styles from "@/styles/Funcionamiento.module.css"
import Image from "next/image"

const Funcionamiento = () => {
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
			<h1 className={styles.funcionamiento__heading}>¿Cómo funciona?</h1>
			<div className={styles.funcionamiento__grid}>
				<div>
					<p>Ubicarte en la seccion de acortar</p>
					<Image
						src={"/img/paso_1.png"}
						height={200}
						width={500}
					/>
				</div>
				<div>
					<p>Colocar la URL que deseas acortar</p>
					<Image
						src={"/img/paso_2.png"}
						height={200}
						width={500}
					/>
				</div>
				<div>
					<p>A la derecha aparecerá tu nuevo enlace.</p>
					<Image
						src={"/img/paso_3.png"}
						height={200}
						width={500}
					/>
				</div>
			</div>
		</section>
	)
}
export default Funcionamiento
