import styles from './Ayah.module.scss'
import { Noto_Sans_Arabic } from '@next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Ayah = ({ id, className, text }) => {
	const { ayah } = styles

	const dynamicClassName = `${ArabicFont.variable} ${ayah} ${className ? className : ''}`

	return (
		<h1 dir='rtl' id={id} className={dynamicClassName} style={ArabicFont.style}>
			{text}
		</h1>
	)
}

export default Ayah
