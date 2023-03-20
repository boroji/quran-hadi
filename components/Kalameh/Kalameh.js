import styles from './Kalameh.module.scss'
import { useGlobalContext } from '@utils/GlobalAppState'

const Kalameh = ({ id, className, text }) => {
	const { dark } = useGlobalContext()

	const { typeStyle, typeStyleDark, typeStyleLight } = styles

	const isDark = dark ? typeStyleDark : typeStyleLight

	const dynamicClassName = `${typeStyle} ${isDark} ${className ? className : ''}`

	return (
		<h1 dir='rtl' id={id} className={dynamicClassName}>
			{text}
		</h1>
	)
}

export default Kalameh
