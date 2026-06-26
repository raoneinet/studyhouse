import { useTranslations } from "next-intl"

export const LpStats = () => {
    const t = useTranslations('LandingPage.Stats');

    return (
        <>
            <section className="py-16 px-6 bg-[#f97316] text-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/20">
                        {[
                            { value: '12K+', label: t('stat1') },
                            { value: '3.4K+', label: t('stat2') },
                            { value: '65K+', label: t('stat3') },
                            { value: '98%', label: t('stat4') }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-black font-display mb-1">{stat.value}</div>
                                <div className="text-orange-200 font-sans text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}