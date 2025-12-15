"use client"

import { User } from "@/types/user"
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react"

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

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await fetch("http://localhost/studyhouse_backend/api/me.php", {
                    credentials: "include"
                })

                if (res.ok) {
                    const data = await res.json()
                    setUser(data.user)
                } else {
                    setUser(null)
                }

            } catch (error: any) {
                setUser(null)
                console.log("Erro ", error)
            }
        }

        checkSession()
    }, [])

    const login = async (userData: User) => {
        const res = await fetch("http://localhost/studyhouse_backend/api/me.php", {
            credentials: "include"
        });
        const data = await res.json();
        setUser(data.user);
    }

    const logout = async () => {
        try {
            await fetch("http://localhost/studyhouse_backend/api/logout.php", {
                method: "POST",
                credentials: "include"
            })
        } catch (error: any) {
            console.log("Erro ao fazer logout. ", error)
        } finally {
            setUser(null)
        }

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
