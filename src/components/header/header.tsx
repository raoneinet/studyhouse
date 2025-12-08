import { Logobrand } from "@/components/header/logobrand"
import { LoginDialog } from "../dialog/loginDialog"
import { useUser } from "@/context/userContext"

export const Header = () => {

    const {user} = useUser()

    return (
        <header className="py-5 px-5 bg-neutral-300">
            <div className="container mx-auto  flex justify-between">
                <Logobrand 
                    title="📚 Studyhouse"
                    subtitle="Organize seus estudos de forma fácil"
                />
                {user === false && <LoginDialog/>}
            </div>
           
        </header>
    )
}