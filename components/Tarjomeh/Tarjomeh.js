import styles from './Tarjomeh.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'
import { useGlobalContext } from '@utils/GlobalAppState'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Tarjomeh = ({ id, className, text }) => {
	const { dark } = useGlobalContext()

	const { typeStyle, typeStyleDark, typeStyleLight } = styles

	const isDark = dark ? typeStyleDark : typeStyleLight

	const dynamicClassName = `${ArabicFont.variable} ${typeStyle} ${isDark} ${className ? className : ''}`

	return (
		<h2 dir='rtl' id={id} className={dynamicClassName} style={ArabicFont.style}>
			{text}
		</h2>
	)
}

export default Tarjomeh
