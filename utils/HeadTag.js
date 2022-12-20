import Head from 'next/head'

const HeadTag = ({ title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='facebook-domain-verification' content='yxy5valpnmjybra9otehjt7kxjh5ym' />
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
		</>
	)
}

export default HeadTag
