import HeadTag from '@utils/HeadTag'
import { useRouter } from 'next/router'

const QuranWord = () => {
	const router = useRouter()

	console.log(router.query)
	console.log(router.pathname)

	return (
		<>
			<HeadTag title='Quran Word' />
			<h1>الله</h1>
		</>
	)
}

export default QuranWord
