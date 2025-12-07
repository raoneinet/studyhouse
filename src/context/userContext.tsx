import {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react"

type userCtxType = {
    user: any
    setUser: (user: any)=>void
}

const UserContext = createContext<userCtxType | null>(null)

export const ContextProvider = ({children}: {children: ReactNode})=>{

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const userHook = ()=> {
    const user = useContext(UserContext)

    return user
}
