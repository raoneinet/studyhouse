import { FormDialog } from "@/components/dialog/formDialog"
import { LoginForm } from "@/components/login/loginForm"
import { RegisterForm } from "@/components/register/registerForm"
import { BookOpen } from 'lucide-react';
import { useGetMeQuery } from "@/app/reducer/userApi";
import { LoginLinks } from "../login/loginLinks";
import { Logobrand } from "./logobrand";

export const Header = () => {

    const { data: user, isLoading } = useGetMeQuery()

    return (
        <header className="py-5 px-10 ">
            <div className="container mx-auto flex justify-between items-center">
                <Logobrand />
                {!user &&
                    <div className="flex gap-3">
                        <FormDialog
                            title="Login"
                            form={<LoginForm />}
                            desc="Faça login para organizar seus estudos de forma fácil"
                            links={<LoginLinks />}
                        />
                        <FormDialog
                            title="Criar conta"
                            form={<RegisterForm />}
                            desc="Crie uma conta para organizar seus estudos de forma fácil"
                            links={<p className="text-sm text-slate-600 hover:underline"><a href="#">já tenho conta</a></p>}
                        />
                    </div>
                }
            </div>
        </header>
    )
}