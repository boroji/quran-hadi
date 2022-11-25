import Ayah from '@components/Ayah/Ayah'
import styles from './Surah.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Surah = ({ id, className, text, verse = false }) => {
	const { container, shomareh } = styles

	const dynamicClassName = `${ArabicFont.variable} ${shomareh} ${className ? className : ''}`

	return (
		<main id={id} className={container}>
			{text.map(ayah => {
				const { words } = ayah
				return <Ayah key={ayah.id} text={words} />
			})}
			{verse && (
				<p dir='rtl' className={dynamicClassName} style={ArabicFont.style}>
					آیه {verse}
				</p>
			)}
		</main>
	)
}

export default Surah
