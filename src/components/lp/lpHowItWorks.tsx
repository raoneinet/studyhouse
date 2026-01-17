import { BarChart3, Layers, Filter } from 'lucide-react';
export const LpHowItWorks = () => {
    return (
        <>
            <section id="como-funciona" className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Como funciona</h2>
                        <p className="text-xl text-gray-600">Três passos simples para organizar seus estudos</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Crie seus cards',
                                description: 'Adicione tópicos de estudo com título, descrição, categoria e nível de prioridade.',
                                icon: Layers
                            },
                            {
                                step: '02',
                                title: 'Organize e priorize',
                                description: 'Use categorias, tags e status para manter tudo organizado e focado no que importa.',
                                icon: Filter
                            },
                            {
                                step: '03',
                                title: 'Acompanhe o progresso',
                                description: 'Visualize seu avanço com dashboard interativo e estatísticas detalhadas.',
                                icon: BarChart3
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="text-6xl font-bold text-purple-100 mb-4">{item.step}</div>
                                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}