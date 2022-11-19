import styles from './Navigation.module.scss'
import Button from '../Button/Button'
import { useGlobalContext } from '../../../utils/GlobalAppState'

const Navigation = ({ id, className }) => {
	const { dark, darkHandler } = useGlobalContext()

	const { container, navLight, navDark } = styles

	const dynamicClassName = `${container} ${dark ? navDark : navLight} ${className ? className : ''}`

	return (
		<nav id={id} className={dynamicClassName}>
			<Button text={dark ? 'تیره' : 'روشن'} clickHandler={darkHandler} />
		</nav>
	)
}

export default Navigation
