import styles from './Tarjomeh.module.scss'

const Tarjomeh = ({ id, className, text }) => {
	const dynamicClassName = `${className ? className : ''}`

	return (
		<h2 id={id} className={dynamicClassName}>
			{text}
		</h2>
	)
}

export default Tarjomeh
