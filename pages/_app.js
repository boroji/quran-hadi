import GoogleAnalytics from '@utils/GoogleAnalytics'
import Navigation from '@components/UI/Navigation/Navigation'
import '@styles/globals.css'
import { GlobalAppState } from '@utils/GlobalAppState'
import GlobalStyles from '@utils/GlobalStyles'
import { Noto_Sans_Arabic } from 'next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
	subsets: ['arabic'],
})

function Application({ Component, pageProps }) {
	return (
		<main className={ArabicFont.variable}>
			<GlobalAppState>
				<GlobalStyles>
					<Navigation />
					<Component {...pageProps} />
					<GoogleAnalytics />
				</GlobalStyles>
			</GlobalAppState>
		</main>
	)
}

export default Application
