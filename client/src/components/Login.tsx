import React from "react"
import {ThemeContext} from "../contexts/ThemeContext";
import {UserContext} from "../contexts/UserContext";



function Login({}) {
    const {isDark, black, white} = React.useContext(ThemeContext);
    const theme = isDark ? black : white;

    const {isLoggedin, email, password} = React.useContext(UserContext);
    const user = isLoggedin ? "Logged in" : "Not logged in";
    return (
        <>
            <form >
                <input placeholder="Username" style={{backgroundColor: theme.backgroundColor, color: theme.color}}  id="username" />
                <input placeholder="Password" style={{backgroundColor: theme.backgroundColor, color: theme.color}} id="password" />
                <button>Login</button>
                <p>{user}</p>
            </form>
        </>
    )
}
export default Login;