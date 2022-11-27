import Ayat from '@components/Ayat/Ayat'
import Wrapper from '@components/UI/Layout/Wrapper'
import HeadTag from '@utils/HeadTag'

export default function Home() {
	return (
		<>
			<HeadTag title='Quran Hadi' />
			<Wrapper>
				<Ayat
					text={[
						{
							id: '1:1:1',
							surah: 'حمد',
							surahNumber: '1',
							juz: '1',
							hizb: '1',
							verse: '۱',
							words: [
								{
									id: '1:1:1-1',
									kalameh: 'بِسْمِ',
									tarjomeh: 'به نام',
								},
								{
									id: '1:1:1-2',
									kalameh: 'اللَّـهِ',
									tarjomeh: 'خداوند',
								},
								{
									id: '1:1:1-3',
									kalameh: 'الرَّحْمنِ',
									tarjomeh: 'بخشنده‌ی',
								},
								{
									id: '1:1:1-4',
									kalameh: 'الرَّحِيمِ',
									tarjomeh: 'مهربان',
								},
							],
						},
						{
							id: '1:2:1',
							surah: 'حمد',
							surahNumber: '1',
							juz: '1',
							hizb: '1',
							verse: '۲',
							words: [
								{
									id: '1:2:1-',
									kalameh: 'الْحَمْدُ',
									tarjomeh: 'سپاس و ستایش',
								},
								{
									id: '1:2:1-',
									kalameh: 'لِلَّهِ',
									tarjomeh: 'از آنِ خداست',
								},
								{
									id: '1:2:1-',
									kalameh: 'رَبِّ',
									tarjomeh: 'که مالک و صاحب اختیار',
								},
								{
									id: '1:2:1-',
									kalameh: 'الْعالَمِينَ',
									tarjomeh: 'جهانیان است',
								},
							],
						},
					]}
				/>
			</Wrapper>
		</>
	)
}
