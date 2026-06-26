import Link from "next/link"
import { useTranslations } from "next-intl"

export const LpRegisterPush = () => {
    const t = useTranslations('LandingPage.RegisterPush');

    return (
        <>
            <section className="py-24 px-6 bg-[#f97316]">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-6 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-xl font-sans text-orange-200 mb-10 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                    <Link href="/register" className="inline-flex justify-center items-center px-10 py-4 bg-white text-[#f97316] rounded-2xl font-bold font-sans text-lg hover:bg-gray-50 transition-all shadow-lg shadow-black/10 hover:-translate-y-1">
                        {t('cta')}
                    </Link>
                    <div className="mt-8 flex justify-center items-center gap-2 text-orange-300 text-xs font-sans">
                        <span>{t('footer1')}</span>
                        <span>•</span>
                        <span>{t('footer2')}</span>
                    </div>
                </div>
            </section>
        </>
    )
}