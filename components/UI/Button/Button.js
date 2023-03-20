import styles from './Button.module.scss'
import { useGlobalContext } from '@utils/GlobalAppState'

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

	const dynamicClassName = `${btn} ${buttonType} ${className ? className : ''}`

	return (
		<div
			dir='rtl'
			id={id}
			className={dynamicClassName}
			onClick={clickHandler}
			ref={refHandler}>
			{iconLeft && iconLeft}
			{text}
			{iconRight && iconRight}
		</div>
	)
}

export default Button
