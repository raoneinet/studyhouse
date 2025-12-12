import { Logobrand } from "@/components/header/logobrand"
import { LoginDialog } from "@/components/dialog/loginDialog"
import { useAuth } from "@/context/userContext"
import { UserMenuDropdown } from "@/components/header/userMenuDropdown"
import { LoginForm } from "../login/loginForm"
import { RegisterForm } from "../register/registerForm"

export const Header = () => {

    const { user } = useAuth()

    return (
        <header className="py-5 px-5 bg-neutral-300">
            <div className="flex justify-between items-center">
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