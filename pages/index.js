import Ayah from '../components/Ayah/Ayah'
import HeadTag from 'utils/HeadTag'

export default function Home() {
	return (
		<>
			<HeadTag title='Quran Hadi' />
			<Ayah
				text={[
					{
						id: '1-1-1-1',
						kalameh: 'بِسْمِ',
						tarjomeh: 'به نام',
					},
					{
						id: '1-1-1-2',
						kalameh: 'اللَّـهِ',
						tarjomeh: 'خداوند',
					},
					{
						id: '1-1-1-3',
						kalameh: 'الرَّحْمنِ',
						tarjomeh: 'بخشنده‌ی',
					},
					{
						id: '1-1-1-4',
						kalameh: 'الرَّحِيمِ',
						tarjomeh: 'مهربان',
					},
				]}
			/>
		</>
	)
}
