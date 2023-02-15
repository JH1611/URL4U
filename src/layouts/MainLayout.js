import Head from "next/head"

const MainLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>URL4U - Acortador de enlaces</title>
				<meta
					name="description"
					content="url4u, Acortador de enlaces, url shortener"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			{children}
		</>
	)
}
export default MainLayout
