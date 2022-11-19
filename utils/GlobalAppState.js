import { createContext, useContext, useState } from 'react'

const QuranAppState = createContext()

const GlobalAppState = ({ children }) => {
	const [dark, setDark] = useState(false)

	const darkHandler = () => setDark(() => !dark)

	return <QuranAppState.Provider value={{ dark, darkHandler }}>{children}</QuranAppState.Provider>
}

export const useGlobalContext = () => {
	return useContext(QuranAppState)
}

export { GlobalAppState, QuranAppState }
