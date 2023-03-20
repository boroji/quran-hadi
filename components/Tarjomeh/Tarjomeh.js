import styles from './Tarjomeh.module.scss'

import { useGlobalContext } from '@utils/GlobalAppState'

const Tarjomeh = ({ id, className, text }) => {
	const { dark } = useGlobalContext()

	const { typeStyle, typeStyleDark, typeStyleLight } = styles

	const isDark = dark ? typeStyleDark : typeStyleLight

	const dynamicClassName = `${typeStyle} ${isDark} ${className ? className : ''}`

	return (
		<h2 dir='rtl' id={id} className={dynamicClassName}>
			{text}
		</h2>
	)
}

export default Tarjomeh
