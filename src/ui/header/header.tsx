import { Logobrand } from "@/components/header/logobrand"
import { LoginDialog } from "@/components/dialog/loginDialog"
import { useAuth } from "@/context/userContext"
import { LoginForm } from "@/ui/login/loginForm"
import { RegisterForm } from "@/ui/register/registerForm"

export const Header = () => {

    const { user } = useAuth()

    return (
        <header className="py-5 px-5 bg-neutral-300">
            <div className="container mx-auto  flex justify-between">
                <Logobrand
                    title="📚 Studyhouse"
                    subtitle="Organize seus estudos de forma fácil"
                />
                {!user &&
                    <div className="flex gap-3">
                        <LoginDialog 
                            title="Login"
                            form={<LoginForm/>}
                        />
                        <LoginDialog 
                            title="Criar conta"
                            form={<RegisterForm/>}
                        />
                    </div>
                }
                
            </div>

        </header>
    )
}