import Surah from '@components/Surah/Surah'
import Wrapper from '@components/UI/Layout/Wrapper'
import HeadTag from '@utils/HeadTag'

export default function Home() {
	return (
		<>
			<HeadTag title='Quran Hadi' />
			<Wrapper>
				<Surah
					text={[
						{
							id: '1:1:1',
							verse: '۱',
							words: [
								{
									id: '1:1:1:1',
									kalameh: 'بِسْمِ',
									tarjomeh: 'به نام',
								},
								{
									id: '1:1:1:2',
									kalameh: 'اللَّـهِ',
									tarjomeh: 'خداوند',
								},
								{
									id: '1:1:1:3',
									kalameh: 'الرَّحْمنِ',
									tarjomeh: 'بخشنده‌ی',
								},
								{
									id: '1:1:1:4',
									kalameh: 'الرَّحِيمِ',
									tarjomeh: 'مهربان',
								},
							],
						},
						{
							id: '1:1:2',
							verse: '2',
							words: [
								{
									id: '1:1:1:1',
									kalameh: 'بِسْمِ',
									tarjomeh: 'به نام',
								},
								{
									id: '1:1:1:2',
									kalameh: 'اللَّـهِ',
									tarjomeh: 'خداوند',
								},
								{
									id: '1:1:1:3',
									kalameh: 'الرَّحْمنِ',
									tarjomeh: 'بخشنده‌ی',
								},
								{
									id: '1:1:1:4',
									kalameh: 'الرَّحِيمِ',
									tarjomeh: 'مهربان',
								},
							],
						},
					]}
				/>
			</Wrapper>
		</>
	)
}
