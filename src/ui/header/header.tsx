import { Logobrand } from "@/components/header/logobrand"
import { LoginDialog } from "@/components/dialog/loginDialog"
import { useAuth } from "@/context/userContext"
import { LoginForm } from "@/ui/login/loginForm"
import { RegisterForm } from "@/ui/register/registerForm"
import { UserAvatar } from "@/components/header/userAvatar"
import { UserMenuDropdown } from "@/components/header/userMenuDropdown"

export const Header = () => {

    const { user } = useAuth()

    return (
        <header className="py-5 px-5 bg-neutral-300">
            <div className="container mx-auto  flex justify-between items-center">
                <Logobrand
                    title="📚 Studyhouse"
                    subtitle="Organize seus estudos de forma fácil"
                />
                {!user &&
                    <div className="flex gap-3">
                        <LoginDialog
                            title="Login"
                            form={<LoginForm />}
                        />
                        <LoginDialog
                            title="Criar conta"
                            form={<RegisterForm />}
                        />
                    </div>
                }
                {user &&
                    <div className="flex gap-2 items-center">
                        <p>{`${user.firstname} ${user.lastname}`}</p>
                        <UserMenuDropdown/>
                    </div>
                }
            </div>
        </header>
    )
}