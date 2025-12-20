import { Header } from "@/components/header/header"

export const LoggedOut = () => {
    return (
        <div>
            <Header/>
            <div className="container mx-auto">
                Logged Out
            </div>
        </div>
    )
}