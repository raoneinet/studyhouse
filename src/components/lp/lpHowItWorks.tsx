import { BarChart3, Layers, Filter } from 'lucide-react';
export const LpHowItWorks = () => {
    return (
        <>
            <section id="como-funciona" className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="mb-16">
                        <p className="text-sm font-bold font-display text-[#6735BC] tracking-widest uppercase mb-2">COMO FUNCIONA</p>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-4 tracking-tight">Simples como 1, 2, 3</h2>
                        <p className="text-xl font-sans text-gray-600 max-w-2xl">Em menos de 2 minutos você já tem seus primeiros cards organizados e prontos para estudar.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Crie seus cards',
                                description: 'Adicione tópicos de estudo, defina uma categoria e prioridade. Rápido e sem burocracia.',
                                icon: Layers
                            },
                            {
                                step: '02',
                                title: 'Organize e priorize',
                                description: 'Use categorias, tags e status de andamento para saber o que é mais urgente. Chega de acumular matéria atrasada.',
                                icon: Filter
                            },
                            {
                                step: '03',
                                title: 'Acompanhe o progresso',
                                description: 'Veja tudo no seu painel. Quantos cards revisados, estudados ou atrasados. O controle da sua evolução.',
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