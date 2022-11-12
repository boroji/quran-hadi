import styles from './Ayah.module.scss'

const Ayah = ({ id, className, text }) => {
	const dynamicClassName = `${className ? className : ''}`

	return (
		<h1 id={id} className={dynamicClassName}>
			{text}
		</h1>
	)
}

export default Ayah
