import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const LpTestimonials = () => {
    const t = useTranslations('LandingPage.Testimonials');

    return (
        <section id="depoimentos" className="py-20 px-6 bg-[#F5F4FB]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold font-display text-[#f97316] tracking-widest uppercase mb-2">{t('badge')}</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-xl font-sans text-gray-600">{t('subtitle')}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: t('testimonial1Quote'),
                            name: t('testimonial1Name'),
                            role: t('testimonial1Role'),
                            color: "bg-[#f97316]"
                        },
                        {
                            quote: t('testimonial2Quote'),
                            name: t('testimonial2Name'),
                            role: t('testimonial2Role'),
                            color: "bg-[#10C98F]"
                        },
                        {
                            quote: t('testimonial3Quote'),
                            name: t('testimonial3Name'),
                            role: t('testimonial3Role'),
                            color: "bg-[#F59E0B]"
                        }
                    ].map((testimonial, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 font-sans leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold font-display shadow-sm`}>
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold font-display text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500 font-sans">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
