import { createContext, useState } from 'react'

const DarkModeContext: any = createContext('');

const DarkmodeProvider = (props: any) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    )
}
export { DarkmodeProvider, DarkModeContext }
