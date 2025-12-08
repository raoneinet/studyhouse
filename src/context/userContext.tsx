"use client"
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react"

type User = {
    id: number
    email: string
    password: string
}

type authContextType = {
    user: User | null
    login: (userData: User)=>void
}

const UserContext = createContext<authContextType>({
    user: null,
    login: ()=>{}
})

export const ContextProvider = ({children}: {children: ReactNode})=>{

    const [user, setUser] = useState<User | null>(null)

    const login = (userData: User)=>{
        setUser(userData)
    }

    return (
        <UserContext.Provider value={{user, login}}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = ()=> {
    const userAuth = useContext(UserContext)

    return userAuth
}
