import GoogleAnalytics from 'utils/GoogleAnalytics'
import Navigation from '../components/UI/Navigation/Navigation'
import '../styles/globals.css'
import { GlobalAppState } from '../utils/GlobalAppState'
import GlobalStyles from '../utils/GlobalStyles'

function Application({ Component, pageProps }) {
	return (
		<GlobalAppState>
			<GlobalStyles>
				<Navigation />
				<Component {...pageProps} />
				<GoogleAnalytics />
			</GlobalStyles>
		</GlobalAppState>
	)
}

export default Application
