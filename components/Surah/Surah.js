import Ayah from '@components/Ayah/Ayah'
import styles from './Surah.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'
import { useGlobalContext } from '@utils/GlobalAppState'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Surah = ({ id, className, text, verse = false }) => {
	const { dark } = useGlobalContext()

	const { container, shomareh, shomarehDark, shomarehLight } = styles

	const isDark = dark ? shomarehDark : shomarehLight

	const dynamicClassName = `${ArabicFont.variable} ${shomareh} ${isDark} ${
		className ? className : ''
	}`

	return (
		<main
			id={id}
			className={container}>
			{text.map(ayah => {
				const { words } = ayah
				return (
					<Ayah
						key={ayah.id}
						text={words}
					/>
				)
			})}
			{verse && (
				<p
					dir='rtl'
					className={dynamicClassName}
					style={ArabicFont.style}>
					{verse}
				</p>
			)}
		</main>
	)
}

export default Surah
