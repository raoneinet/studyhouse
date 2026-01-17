import { Star, AlertCircle, Grid, BarChart3, Filter, Calendar } from 'lucide-react';

export const LpResources = () => {
    return (
        <>
            <section id="recursos" className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos poderosos</h2>
                        <p className="text-xl text-gray-600">Tudo que você precisa em uma plataforma</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Grid, title: 'Sistema de Cards', desc: 'Organize estudos visualmente com cards personalizáveis' },
                            { icon: Filter, title: 'Categorias & Tags', desc: 'Filtre e encontre conteúdos rapidamente' },
                            { icon: AlertCircle, title: 'Níveis de Prioridade', desc: 'Defina urgência e importância de cada card' },
                            { icon: BarChart3, title: 'Dashboard Completo', desc: 'Visualize todo o progresso em um só lugar' },
                            { icon: Star, title: 'Favoritos', desc: 'Marque cards importantes para acesso rápido' },
                            { icon: Calendar, title: 'Atividade Recente', desc: 'Histórico completo de tudo que você estudou' }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
                                <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}