import Ayah from '@components/Ayah/Ayah'
import styles from './Ayat.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'
import { useGlobalContext } from '@utils/GlobalAppState'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Ayat = ({ id, className, text }) => {
	const { dark } = useGlobalContext()

	const { container, shomareh, shomarehDark, shomarehLight } = styles

	const isDark = dark ? shomarehDark : shomarehLight

	const counterClass = `${ArabicFont.variable} ${shomareh} ${isDark}`

	const dynamicClassName = `${container} ${className ? className : ''}`

	return (
		<>
			{text.map(ayah => {
				const { verse, words } = ayah
				return (
					<main id={id} className={dynamicClassName} key={ayah.id}>
						<Ayah text={words} />
						<p dir='rtl' className={counterClass} style={ArabicFont.style}>
							{verse}
						</p>
					</main>
				)
			})}
		</>
	)
}

export default Ayat
