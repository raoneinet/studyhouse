import { FormDialog } from "@/components/dialog/formDialog"
import { LoginForm } from "@/components/login/loginForm"
import { RegisterForm } from "@/components/register/registerForm"
import { BookOpen } from 'lucide-react';
import { useGetMeQuery } from "@/app/reducer/authApi";
import { LoginLinks } from "../login/loginLinks";
import { Logobrand } from "./logobrand";
import Link from "next/link"

export const Header = () => {

    const { data: user, isLoading } = useGetMeQuery()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-10 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
            <div className="container mx-auto flex justify-between items-center">
                <Logobrand />
                <div className="hidden md:flex items-center gap-8 text-sm font-bold font-sans text-gray-500">
                    <a href="#como-funciona" className="hover:text-[#6735BC] transition-colors">Como funciona</a>
                    <a href="#recursos" className="hover:text-[#6735BC] transition-colors">Funcionalidades</a>
                    <a href="#depoimentos" className="hover:text-[#6735BC] transition-colors">Depoimentos</a>
                </div>

                {!user &&
                    <div className="flex items-center gap-6">
                        <FormDialog
                            title={<span className="text-sm font-bold font-sans hover:text-[#6735BC] transition-colors">Login</span>}
                            form={<LoginForm />}
                            desc="Faça login para organizar seus estudos de forma fácil"
                            links={<LoginLinks />}
                        />
                        <Link href="/register" className="px-5 py-2.5 bg-[#6735BC] text-white text-sm rounded-lg font-bold font-sans hover:bg-[#522996] transition-all shadow-md shadow-[#6735BC]/20">
                            Começar grátis
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}