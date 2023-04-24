import {User} from '../types';
import React from "react";

export const UserContext = React.createContext<User>(
    {
        email: "", isLoggedin: false, password: ""

    }
);

export default function UserContextProvider(props:{children:React.ReactNode}) {
    const [user, setUser] = React.useState<User>({
        email: "", isLoggedin: false, password: ""

    });
    return (
        <UserContext.Provider value={user}>
            <button onClick={() => setUser({...user, isLoggedin:!user.isLoggedin})}>Loggedin</button>
            {props.children}
        </UserContext.Provider>
    )
}

