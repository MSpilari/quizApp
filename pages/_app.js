import { GlobalStyle } from '../globalStyle'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={db.theme}>
			<GlobalStyle />
			<Head>
				<title>Quiz app</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
