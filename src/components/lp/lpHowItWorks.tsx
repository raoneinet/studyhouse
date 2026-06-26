import { BarChart3, Layers, Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const LpHowItWorks = () => {
    const t = useTranslations('LandingPage.HowItWorks');

    return (
        <>
            <section id="como-funciona" className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="mb-16">
                        <p className="text-sm font-bold font-display text-[#f97316] tracking-widest uppercase mb-2">{t('badge')}</p>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4 tracking-tight">{t('title')}</h2>
                        <p className="text-xl font-sans text-gray-600 max-w-2xl">{t('subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: t('step1Title'),
                                description: t('step1Desc'),
                                icon: Layers
                            },
                            {
                                step: '02',
                                title: t('step2Title'),
                                description: t('step2Desc'),
                                icon: Filter
                            },
                            {
                                step: '03',
                                title: t('step3Title'),
                                description: t('step3Desc'),
                                icon: BarChart3
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <div className="text-6xl font-black font-display text-gray-100">{item.step}</div>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-sans leading-relaxed text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}