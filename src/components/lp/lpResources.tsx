import { Star, AlertCircle, Grid, BarChart3, Filter, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const LpResources = () => {
    const t = useTranslations('LandingPage.Resources');

    return (
        <>
            <section id="recursos" className="py-24 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="mb-10">
                                <p className="text-sm font-bold font-display text-[#f97316] tracking-widest uppercase mb-2">{t('badge')}</p>
                                <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 tracking-tight">{t('title')}</h2>
                                <p className="text-xl font-sans text-gray-600">{t('subtitle')}</p>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: Grid, title: t('feature1Title'), desc: t('feature1Desc') },
                                    { icon: Filter, title: t('feature2Title'), desc: t('feature2Desc') },
                                    { icon: AlertCircle, title: t('feature3Title'), desc: t('feature3Desc') },
                                    { icon: BarChart3, title: t('feature4Title'), desc: t('feature4Desc') }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                            <feature.icon className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold font-display text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-gray-600 font-sans text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative">
                                {/* Glow Background */}
                                <div className="absolute inset-0 bg-linear-to-tr from-[#f97316]/10 to-transparent rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
                                
                                {/* Dashboard Mockup Container */}
                                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(103,53,188,0.08)] p-6 md:p-8 w-full z-10">
                                    
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black font-display text-gray-900 mb-1">{t('mockupTitle')}</h3>
                                            <p className="text-gray-500 font-sans text-sm">{t('mockupWelcome')}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-2xl bg-orange-100"></div>
                                            <div className="w-10 h-10 rounded-full bg-[#f97316]"></div>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">{t('metricTotal')}</span>
                                            <span className="text-3xl font-black font-display text-gray-900">9</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">{t('metricOngoing')}</span>
                                            <span className="text-3xl font-black font-display text-orange-500">4</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">{t('metricUrgent')}</span>
                                            <span className="text-3xl font-black font-display text-red-500">2</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">{t('metricDone')}</span>
                                            <span className="text-3xl font-black font-display text-green-500">2</span>
                                        </div>
                                    </div>

                                    {/* Continue Studying */}
                                    <div className="mb-8">
                                        <div className="flex justify-between items-end mb-4">
                                            <h4 className="font-bold text-gray-500 font-sans text-sm">{t('continueStudying')}</h4>
                                            <span className="font-bold text-[#f97316] text-xs cursor-pointer hover:underline">{t('viewAll')}</span>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {/* Card 1 */}
                                            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                                <div className="mb-3">
                                                    <span className="px-3 py-1 bg-orange-100 text-[#f97316] rounded-full text-xs font-bold">programming</span>
                                                </div>
                                                <h5 className="font-bold font-display text-gray-900 text-sm mb-1">{t('card1Title')}</h5>
                                                <p className="text-xs text-gray-400 font-sans mb-4 leading-relaxed">{t('card1Desc')}</p>
                                                
                                                <div className="w-full bg-orange-50 rounded-full h-1.5 mb-3">
                                                    <div className="bg-[#f97316] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> {t('card1Status')}
                                                </div>
                                            </div>

                                            {/* Card 2 */}
                                            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                                <div className="mb-3">
                                                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">computing</span>
                                                </div>
                                                <h5 className="font-bold font-display text-gray-900 text-sm mb-1">{t('card2Title')}</h5>
                                                <p className="text-xs text-gray-400 font-sans mb-4 leading-relaxed">{t('card2Desc')}</p>
                                                
                                                <div className="w-full bg-green-50 rounded-full h-1.5 mb-3">
                                                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> {t('card2Status')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/30">
                                        <h4 className="font-bold text-gray-500 font-sans text-sm mb-4">{t('categoriesTitle')}</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm font-bold font-sans">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 rounded-full bg-[#f97316]"></div> programming
                                                </div>
                                                <span className="text-gray-900">5</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-bold font-sans">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div> computing
                                                </div>
                                                <span className="text-gray-900">3</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-bold font-sans">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div> other
                                                </div>
                                                <span className="text-gray-900">1</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}