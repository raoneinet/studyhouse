"use client"
import { LoggedIn } from "./loggedIn/page"
import { LoggedOut } from "./loggedOut/page"
import { Header } from "@/app/ui/header/header"
import { useAuth } from "@/context/userContext"

const Page = () => {

    const {user} = useAuth()

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Header />
            {user && <LoggedIn />}
            {!user && <LoggedOut />}
        </div>
    )
}

export default Page