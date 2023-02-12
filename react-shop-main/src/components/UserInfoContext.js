import React, {createContext, useState} from "react";
import {dark, light} from "./Theme";
import {ThemeProvider} from "styled-components";

export const UserInfoContextStore = createContext();

const UserInfoContext = (props) => {

    const [themeMode, setThemeMode] = useState("dark");
    const theme = themeMode === "light" ? light : dark;

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');


    const UserInfo = {
        themeMode,
        setThemeMode,
        theme,
        toggleTheme,

    };



    return (
        <UserInfoContextStore.Provider value={UserInfo}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </UserInfoContextStore.Provider>
    );
};

export default UserInfoContext;
