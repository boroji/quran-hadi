import styles from './Wrapper.module.scss'

const Wrapper = ({ id, className, children }) => {
	const { wrapper } = styles

	const dynamicClass = `${wrapper} ${className ? className : ''}`
	return (
		<div id={id} className={dynamicClass}>
			{children}
		</div>
	)
}

export default Wrapper
