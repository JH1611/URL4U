import "@/styles/globals.css"
import "@/styles/normalize.css"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
	palette: {
		primary: {
			main: "#800080",
		},
	},
})

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
