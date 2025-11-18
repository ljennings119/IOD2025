import React, { createContext, useState, useContext} from 'react'

export const themes = {
light: {
foreground: "#333333",
background: "#BAE2FF"
},

dark: {
foreground: "#ffffff",
background: "#222222"
}

};

export const MyThemeContext = React.createContext(
    {theme: themes.light})

    export default function MyThemeProvider(props) {

        const [theme, setTheme] = useState(themes.light)

        const darkMode = theme.background === themes.dark.background

        const toggleTheme = () => {
         setTheme(darkMode ? themes.light : themes.dark);};

        return (
            <MyThemeContext.Provider value={{theme, setTheme, darkMode, toggleTheme}}>
                {props.children}
            </MyThemeContext.Provider>
        )
    }

    export const useThemeContext = () => useContext(MyThemeContext)