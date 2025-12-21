import { LoginDialog } from "@/components/dialog/loginDialog"
import { useAuth } from "@/context/userContext"
import { LoginForm } from "../login/loginForm"
import { RegisterForm } from "../register/registerForm"
import { BookOpen } from 'lucide-react';

export const Header = () => {

    const { user } = useAuth()

    return (
        <header className="py-5 px-10 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">StudyHub</span>
                </div>

                {!user &&
                    <div className="flex gap-3 text-slate-800">
                        <LoginDialog
                            title="Login"
                            form={<LoginForm />}
                            desc="Faça login para organizar seus estudos de forma fácil"
                        />
                        <LoginDialog
                            title="Criar conta"
                            form={<RegisterForm />}
                            desc="Crie uma conta para organizar seus estudos de forma fácil"
                        />
                    </div>
                }
            </div>
        </header>
    )
}