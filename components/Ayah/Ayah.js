import Kalameh from '@components/Kalameh/Kalameh'
import Tarjomeh from '@components/Tarjomeh/Tarjomeh'
import styles from './Ayah.module.scss'

const Ayah = ({ text }) => {
	const { container, words } = styles

	return (
		<section className={container}>
			{text.map(({ id, kalameh, tarjomeh }) => {
				return (
					<article
						key={id}
						className={words}>
						<Kalameh text={kalameh} />
						<Tarjomeh text={tarjomeh} />
					</article>
				)
			})}
		</section>
	)
}

export default Ayah
