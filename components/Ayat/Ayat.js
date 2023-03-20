import Ayah from '@components/Ayah/Ayah'
import styles from './Ayat.module.scss'
import { useGlobalContext } from '@utils/GlobalAppState'

const Ayat = ({ id, className, text }) => {
	const { dark } = useGlobalContext()

	const { container, shomareh, shomarehDark, shomarehLight } = styles

	const isDark = dark ? shomarehDark : shomarehLight

	const counterClass = `${shomareh} ${isDark}`

	const dynamicClassName = `${container} ${className ? className : ''}`

	return (
		<>
			{text.map(ayah => {
				const { verse, words } = ayah
				return (
					<main id={id} className={dynamicClassName} key={ayah.id}>
						<Ayah text={words} />
						<p dir='rtl' className={counterClass}>
							{verse}
						</p>
					</main>
				)
			})}
		</>
	)
}

export default Ayat
