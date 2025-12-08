"use client"
import { useState } from "react"
import { LoggedIn } from "./loggedIn/page"
import { LoggedOut } from "./loggedOut/page"
import { Header } from "@/components/header/header"
import { useUser } from "@/context/userContext"

const Page = () => {

    const {user} = useUser()

    const [loggedIn, setLoggedIn] = useState<boolean>(true)

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Header />
            {user && <LoggedIn />}
            {!user && <LoggedOut />}
        </div>
    )
}

export default Page