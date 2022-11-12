import Head from 'next/head'

const HeadTag = ({ title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
		</>
	)
}

export default HeadTag
