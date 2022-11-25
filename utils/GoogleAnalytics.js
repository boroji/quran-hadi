import { useEffect } from 'react'
import Script from 'next/script'

const GoogleAnalytics = () => {
	useEffect(() => {
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'G-0BE207JNV1')
	}, [])

	return (
		<>
			<Script
				id='GoogleAnalytics'
				async
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-0BE207JNV1'
			/>
			<Script id='GoogleAnalyticsInnerScript' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-0BE207JNV1');
        `}
			</Script>
		</>
	)
}

export default GoogleAnalytics
