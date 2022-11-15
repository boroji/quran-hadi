import ArabicFont from 'utils/ArabicFont'
import styles from './Tarjomeh.module.scss'

const Tarjomeh = ({ id, className, text }) => {
	const { tarjomeh } = styles

	const dynamicClassName = `${ArabicFont.className} ${tarjomeh} ${className ? className : ''}`

	return (
		<h2 id={id} className={dynamicClassName}>
			{text}
		</h2>
	)
}

export default Tarjomeh
