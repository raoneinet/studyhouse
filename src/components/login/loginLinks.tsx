import Link from "next/link"

export const LoginLinks = () => {
    return (
        <div className="flex flex-col">
            <Link href="#" className="text-sm text-slate-600 hover:underline">Esqueceu a senha?</Link>
            <Link href="/register" className="text-sm text-slate-600 hover:underline">Não tenho conta</Link>
        </div>
    )
}