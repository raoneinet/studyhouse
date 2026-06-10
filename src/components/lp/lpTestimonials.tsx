import { Star } from 'lucide-react';

export const LpTestimonials = () => {
    return (
        <section className="py-20 px-6 bg-[#F5F4FB]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold font-display text-[#6735BC] tracking-widest uppercase mb-2">QUEM USA, NÃO PARA</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Quem usa, não para</h2>
                    <p className="text-xl font-sans text-gray-600">Estudantes que transformaram a sua rotina com o Estudaki.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "Meus estudos eram uma bagunça, perdi minha aprovação para a OAB. Com o Estudaki parei de focar no irrelevante. Com certeza recomendaria usar a plataforma!",
                            name: "Ana Santos",
                            role: "Estudante Direito",
                            color: "bg-[#6735BC]"
                        },
                        {
                            quote: "Como trabalho e estudo, não tenho tempo para me organizar. O Estudaki virou meu hub de estudo e revisões. Um sistema visual me ajudou a fixar muito mais fácil.",
                            name: "Matheus Costa",
                            role: "Eng. de Software",
                            color: "bg-[#10C98F]"
                        },
                        {
                            quote: "Eu me frustrava com resumos infinitos. Com o Estudaki eu resumo num card a essência da matéria. Muito mais fácil pra quando for fazer uma revisão!",
                            name: "Juliana Ferreira",
                            role: "Eng. de Sistemas",
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
