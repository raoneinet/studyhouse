import { Star, AlertCircle, Grid, BarChart3, Filter, Calendar } from 'lucide-react';

export const LpResources = () => {
    return (
        <>
            <section id="recursos" className="py-24 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="mb-10">
                                <p className="text-sm font-bold font-display text-[#6735BC] tracking-widest uppercase mb-2">TUDO QUE VOCÊ PRECISA</p>
                                <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 mb-6 tracking-tight">Tudo que você precisa, num só lugar</h2>
                                <p className="text-xl font-sans text-gray-600">O Estudaki foi feito para estudantes que querem parar de procrastinar e começar a progredir.</p>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: Grid, title: 'Sistema de Cards Visual', desc: 'Organize qualquer conteúdo com cards personalizáveis. Adicione imagens, anotações, links e níveis de prioridade.' },
                                    { icon: Filter, title: 'Categorias & Tags Inteligentes', desc: 'Filtre por matéria, orientações ou status. Encontre qualquer card em segundos.' },
                                    { icon: AlertCircle, title: 'Níveis de Prioridade', desc: 'Defina urgência para cada card e saiba exatamente o que precisa estudar primeiro hoje.' },
                                    { icon: BarChart3, title: 'Roadmaps de Estudo', desc: 'Crie trilhas completas com foco. Transforme seus estudos em uma jornada baseada em metas.' }
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
                                <div className="absolute inset-0 bg-linear-to-tr from-[#6735BC]/5 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
                                <img src="/placeholder-dashboard.png" alt="Dashboard do Estudaki" className="relative rounded-2xl border border-gray-200 shadow-2xl w-full h-auto object-cover" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}