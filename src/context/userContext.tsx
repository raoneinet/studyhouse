"use client"
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react"

type User = {
    id: number
    firstname: string
    lastname: string
    username: string
    date_of_birth: Date
    email: string
}

type authContextType = {
    user: User | null
    login: (userData: User) => void
    logout: () => void
}

const UserContext = createContext<authContextType>({
    user: null,
    login: () => { },
    logout: () => { }
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const savedUser = localStorage.getItem("user")
    const [user, setUser] = useState<User | null>(() => {
        return savedUser ? JSON.parse(savedUser) : null
    })

    const login = (userData: User) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const userAuth = useContext(UserContext)

    return userAuth
}
