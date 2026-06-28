import { Logobrand } from "../header/logobrand"
import LanguageSwitcher from "../ui/LanguageSwitcher"
import { useTranslations } from "next-intl"

export const LpFooter = () => {
    const t = useTranslations('LandingPage.LpFooter');

    return (
        <>
            <footer className="border-t border-gray-800 py-12 px-6 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-white font-bold font-display text-2xl flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-[#f97316] rounded-2xl flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                Learnizze
                            </div>
                            <p className="text-gray-400 font-sans mt-2 text-sm max-w-xs">
                                {t('description')}
                            </p>
                        </div>
                        {[
                            { title: t('col1Title'), links: t.raw('col1Links') },
                            { title: t('col2Title'), links: t.raw('col2Links') },
                            { title: t('col3Title'), links: t.raw('col3Links') }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="font-bold font-display text-white mb-4">{col.title}</h4>
                                <ul className="space-y-2">
                                    {col.links.map((link: string, j: number) => (
                                        <li key={j}>
                                            <a href="#" className="text-gray-400 font-sans hover:text-[#f97316] transition-colors text-sm">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
                        <div>© {new Date().getFullYear()} {t('rights')}</div>
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <a href="#" className="hover:text-white transition-colors">{t('madeWith')}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}