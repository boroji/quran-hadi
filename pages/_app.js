import '@styles/globals.css'
import { GlobalAppState } from 'utils/GlobalAppState'
import GlobalStyles from 'utils/GlobalStyles'

function Application({ Component, pageProps }) {
	return (
		<GlobalAppState>
			<GlobalStyles>
				<Component {...pageProps} />
			</GlobalStyles>
		</GlobalAppState>
	)
}

export default Application
