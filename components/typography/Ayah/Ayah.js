import ArabicFont from 'utils/ArabicFont'
import styles from './Ayah.module.scss'

const Ayah = ({ id, className, text }) => {
	const { ayah } = styles

	const dynamicClassName = `${ArabicFont.className} ${ayah} ${className ? className : ''}`

	return (
		<h1 id={id} className={dynamicClassName}>
			{text}
		</h1>
	)
}

export default Ayah
