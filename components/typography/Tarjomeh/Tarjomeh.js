import styles from './Tarjomeh.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Tarjomeh = ({ id, className, text }) => {
	const { typeStyle } = styles

	const dynamicClassName = `${ArabicFont.variable} ${typeStyle} ${className ? className : ''}`

	return (
		<h2 dir='rtl' id={id} className={dynamicClassName} style={ArabicFont.style}>
			{text}
		</h2>
	)
}

export { Tarjomeh }
