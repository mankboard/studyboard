import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialstate = {
    chat: false,
    cart: false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setactiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialstate)
    const handleClick = (clicked) => {
        // why used array in line 20( [clicked]: true )
        setIsClicked({
            ...initialstate,
            [clicked]: true
        })
    }
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode',e.target.value)
        setThemeSettings(false)
    }

    const setColor = (mode) => {
        setCurrentColor(mode)

        localStorage.setItem('colorMode',mode)
        setThemeSettings(false)
    }
    const [themeSettings,setThemeSettings] = useState(false)

    const [isopen, setisopen] = useState(false)
    return (
        
        <StateContext.Provider
        value={{
            activeMenu,
            setactiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            isopen,
            setisopen,
            themeSettings,
            setThemeSettings,
            setColor,
            setMode
        }}
        >
            {children}
        </StateContext.Provider>
    
)
}



export const useStateContext =() => useContext(StateContext);