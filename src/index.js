import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle, darkTheme, defaultTheme } from './utils';




const App = () => {
    const [useDarkTheme, setDarkTheme] = useState(false);
    const stylesWrappers = {
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button style={{ margin: "0 16px 24px", padding: "8px 16px" }} onClick={() => setDarkTheme(true)} >Dark Theme</button>
            <button style={{ margin: "0 16px 24px", padding: "8px 16px" }} onClick={() => setDarkTheme(false)} >Default Theme</button>

            <div style={stylesWrappers}>
                <PrimaryButton modifiers={["small", "error", "primaryButtonError"]}> Primary</PrimaryButton>
                <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}> Secondary</SecondaryButton >
                <TertiaryButton
                    modifiers={["success", "tertiaryButtonuSccess"]}
                >Tertiary</TertiaryButton>

                <PrimaryButton > Primary</PrimaryButton>
                <SecondaryButton > Secondary</SecondaryButton >
                <TertiaryButton
                >Tertiary</TertiaryButton>
            </div>
            <GlobalStyle />
        </ThemeProvider>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));