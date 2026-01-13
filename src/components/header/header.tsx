import { FormDialog } from "@/components/dialog/formDialog"
import { LoginForm } from "@/components/login/loginForm"
import { RegisterForm } from "@/components/register/registerForm"
import { BookOpen } from 'lucide-react';
import { useGetMeQuery } from "@/app/reducer/userApi";

export const Header = () => {

    const {data: user, isLoading} = useGetMeQuery()

    return (
        <header className="py-5 px-10 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">Estudaki</span>
                </div>

                {!user &&
                    <div className="flex gap-3">
                        <FormDialog
                            title="Login"
                            form={<LoginForm />}
                            desc="Faça login para organizar seus estudos de forma fácil"
                        />
                        <FormDialog
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