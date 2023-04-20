import React from "react"
import {ThemeContext} from "../contexts/ThemeContext";



function Login({}) {
    const {isDark, black, white} = React.useContext(ThemeContext);
    const theme = isDark ? black : white;
    return (
        <>
            <form >
                <input placeholder="Username" style={{backgroundColor: theme.backgroundColor, color: theme.color}}  id="username" />
                <input placeholder="Password" style={{backgroundColor: theme.backgroundColor, color: theme.color}} id="password" />
                <button>Login</button>
            </form>
        </>
    )
}
export default Login;