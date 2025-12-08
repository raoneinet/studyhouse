"use client"
import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react"

type userCtxType = {
    user: any;
    setUser: (user: any)=>void;
}

const UserContext = createContext<boolean | any>(null)

export const ContextProvider = ({children}: {children: ReactNode})=>{

    const [user, setUser] = useState<any>(false)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> {
    const user = useContext(UserContext)

    return user
}
