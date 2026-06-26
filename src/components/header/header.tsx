import { FormDialog } from "@/components/dialog/formDialog"
import { LoginForm } from "@/components/login/loginForm"
import { RegisterForm } from "@/components/register/registerForm"
import { BookOpen } from 'lucide-react';
import { useGetMeQuery } from "@/app/reducer/authApi";
import { LoginLinks } from "../login/loginLinks";
import { Logobrand } from "./logobrand";
import Link from "next/link"
import { useTranslations } from "next-intl";

export const Header = () => {

    const { data: user, isLoading } = useGetMeQuery()
    const t = useTranslations('Header');

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-10 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
            <div className="container mx-auto flex justify-between items-center">
                <Logobrand />
                <div className="hidden md:flex items-center gap-8 text-sm font-bold font-sans text-gray-500">
                    <a href="#como-funciona" className="hover:text-[#f97316] transition-colors">{t('howItWorks')}</a>
                    <a href="#recursos" className="hover:text-[#f97316] transition-colors">{t('features')}</a>
                    <a href="#depoimentos" className="hover:text-[#f97316] transition-colors">{t('testimonials')}</a>
                </div>

                {!user &&
                    <div className="flex items-center gap-6">
                        <FormDialog
                            title={<span className="text-sm font-bold font-sans hover:text-[#f97316] transition-colors">{t('login')}</span>}
                            form={<LoginForm />}
                            desc={t('loginDesc')}
                            links={<LoginLinks />}
                        />
                        <Link href="/register" className="px-5 py-2.5 bg-[#f97316] text-white text-sm rounded-2xl font-bold font-sans hover:bg-[#ea580c] transition-all shadow-md shadow-[#f97316]/20">
                            {t('startFree')}
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}