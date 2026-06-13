import { Logobrand } from "@/components/header/logobrand"
import { LoginForm } from "@/components/login/loginForm"
import Link from "next/link"

const LoginPage = () => {
    return (
        <div className="w-full min-h-screen bg-linear-to-br from-purple-50 via-orange-50 to-indigo-50">
            <div className="container mx-auto min-h-screen flex flex-col items-center">
                <Link href="/" className="self-start text-slate-600 p-3">← voltar</Link>
                <div className="max-w-3xl bg-white px-4 py-6 flex flex-col gap-5 rounded-lg overflow-y-auto">
                    <div className="text-slate-800 cursor-pointer">
                        <Logobrand />
                        <p className="text-sm mt-3">Crie uma conta para organizar seus estudos de forma fácil</p>
                    </div>
                    <div className="flex flex-col">
                        <LoginForm />
                        <Link href="/register" className="text-sm text-slate-600 hover:underline mt-4">Não tenho conta</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage