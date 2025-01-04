import { useState, useEffect, createContext } from "react"

export const UserContext = createContext({
    userState: {}
})

export const UserProvider = ({children}) => {
    const userDefaultState = {
        isAuth: false,
        name: '',
        dob: '',
        isBlocked: false
    }

    const [userState, setUserState] = useState(userDefaultState)
    
    const value = { userState }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}