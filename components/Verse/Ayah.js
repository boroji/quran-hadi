import { Kalameh } from '../Typography/Kalameh'
import { Tarjomeh } from '../Typography/Tarjomeh'
import styles from './Ayah.module.scss'

const Ayah = ({ text }) => {
	const { container, words } = styles

	return (
		<section className={container}>
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
