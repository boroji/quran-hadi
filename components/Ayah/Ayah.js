import Kalameh from '@components/Kalameh/Kalameh'
import Tarjomeh from '@components/Tarjomeh/Tarjomeh'
import { useGlobalContext } from '@utils/GlobalAppState'
import styles from './Ayah.module.scss'

const Ayah = ({ text }) => {
	const { dark } = useGlobalContext()

	const { container, containerDark, containerLight, words } = styles

	const isDark = dark ? containerDark : containerLight

	return (
		<section className={`${container} ${isDark}`}>
			{text.map(({ id, kalameh, tarjomeh }) => {
				return (
					<article key={id} className={words}>
						<Kalameh text={kalameh} />
						<Tarjomeh text={tarjomeh} />
					</article>
				)
			})}
		</section>
	)
}

export default Ayah
