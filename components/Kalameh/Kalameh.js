import styles from './Kalameh.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Kalameh = ({ id, className, text }) => {
	const { typeStyle } = styles

	const dynamicClassName = `${ArabicFont.variable} ${typeStyle} ${className ? className : ''}`

	return (
		<h1 dir='rtl' id={id} className={dynamicClassName} style={ArabicFont.style}>
			{text}
		</h1>
	)
}

export default Kalameh
