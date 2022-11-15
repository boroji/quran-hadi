import Ayah from '@components/typography/Ayah/Ayah'
import Tarjomeh from '@components/typography/Tarjomeh/Tarjomeh'
import HeadTag from 'utils/HeadTag'

export default function Home() {
	return (
		<>
			<HeadTag title='Quran Hadi' />
			<Ayah text='بسم الله الرحمن الرحیم' />
			<Tarjomeh text='بسم الله الرحمن الرحیم' />
		</>
	)
}
