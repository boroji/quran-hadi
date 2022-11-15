import '@styles/globals.css'
import ArabicFont from 'utils/ArabicFont'

function Application({ Component, pageProps }) {
	return (
		<main className={ArabicFont.className}>
			<Component {...pageProps} />
		</main>
	)
}

export default Application
