import { useGlobalContext } from './GlobalAppState'

const GlobalStyles = ({ children }) => {
	const { dark } = useGlobalContext()

	const darkBg = 'hsla(178, 10%, 10%, 1)'
	const lightBg = 'hsla(0, 0%, 100%, 1)'

	const darkScrollBg = 'hsla(178, 10%, 40%, 1)'
	const lighScrollBg = 'hsla(178, 45%, 94%, 1)'

	const darkScrollThumb = 'hsla(178, 10%, 15%, 1)'
	const lighScrollThumb = 'hsla(178, 45%, 30%, 1)'

	return (
		<div>
			{children}
			<style jsx global>
				{`
					body {
						background-color: ${dark ? darkBg : lightBg};
					}

					body::-webkit-scrollbar {
						width: 8px;
					}

					body::-webkit-scrollbar-track {
						background: ${dark ? darkScrollBg : lighScrollBg};
					}

					body::-webkit-scrollbar-thumb {
						background-color: ${dark ? darkScrollThumb : lighScrollThumb};
						border-radius: 0px;
						border: none;
					}

					body {
						scrollbar-width: auto;
						scrollbar-color: ${dark ? darkScrollThumb : lighScrollThumb} ${dark ? darkScrollBg : lighScrollBg};
					}
				`}
			</style>
		</div>
	)
}

export default GlobalStyles
