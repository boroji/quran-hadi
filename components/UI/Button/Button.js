import styles from './Button.module.scss'
import { useGlobalContext } from '@utils/GlobalAppState'
import { Noto_Sans_Arabic } from '@next/font/google'

const ArabicFont = Noto_Sans_Arabic({
	variable: '--noto-sans',
	fallback: ['Noto Sans Arabic', 'Vazirmatn'],
	display: 'block',
})

const Button = ({
	id,
	className,

	type = 'primary',

	text,
	clickHandler,
	iconLeft,
	iconRight,

	refHandler,
}) => {
	const { dark } = useGlobalContext()

	const { btn, primaryLight, primaryDark, secondaryLight, secondaryDark } = styles

	const isPrimaryDark = `${dark ? primaryDark : primaryLight}`
	const isSecondaryDark = `${dark ? secondaryDark : secondaryLight}`

	const buttonType = `${type == 'primary' ? isPrimaryDark : isSecondaryDark}`

	const dynamicClassName = `${ArabicFont.variable} ${btn} ${buttonType} ${className ? className : ''}`

	return (
		<div
			dir='rtl'
			id={id}
			className={dynamicClassName}
			onClick={clickHandler}
			ref={refHandler}
			style={ArabicFont.style}>
			{iconLeft && iconLeft}
			{text}
			{iconRight && iconRight}
		</div>
	)
}

export default Button
