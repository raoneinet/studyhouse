import { Logobrand } from "@/components/header/logobrand"
import { RegisterForm } from "@/components/register/registerForm"
import Link from "next/link"

const RegistrationPage = () => {
    return (
        <div className="w-full min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
                <Link href="/" className="place-self-start text-slate-600 p-3">← voltar</Link>
                <div className="max-w-3xl bg-white px-4 py-6  flex flex-col gap-5 rounded-lg overflow-y-auto">
                    <div className="text-slate-800 cursor-pointer">
                        <Logobrand />
                        <p className="text-sm mt-3">Crie uma conta para organizar seus estudos de forma fácil</p>
                    </div>
                    <div>
                        <RegisterForm />
                        <Link href="/" className="text-sm text-slate-600 hover:underline">já tenho conta</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage