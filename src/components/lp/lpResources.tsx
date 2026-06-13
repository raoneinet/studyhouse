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
                                {/* Glow Background */}
                                <div className="absolute inset-0 bg-linear-to-tr from-[#6735BC]/10 to-transparent rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
                                
                                {/* Dashboard Mockup Container */}
                                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(103,53,188,0.08)] p-6 md:p-8 w-full z-10">
                                    
                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black font-display text-gray-900 mb-1">Dashboard</h3>
                                            <p className="text-gray-500 font-sans text-sm">Bem-vindo de volta, Raone 👋</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-100"></div>
                                            <div className="w-10 h-10 rounded-full bg-[#6735BC]"></div>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">Total</span>
                                            <span className="text-3xl font-black font-display text-gray-900">9</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">Em andamento</span>
                                            <span className="text-3xl font-black font-display text-orange-500">4</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">Urgente</span>
                                            <span className="text-3xl font-black font-display text-red-500">2</span>
                                        </div>
                                        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex flex-col justify-between min-h-[90px]">
                                            <span className="text-xs font-sans text-gray-500 uppercase tracking-wide">Concluído</span>
                                            <span className="text-3xl font-black font-display text-green-500">2</span>
                                        </div>
                                    </div>

                                    {/* Continue Studying */}
                                    <div className="mb-8">
                                        <div className="flex justify-between items-end mb-4">
                                            <h4 className="font-bold text-gray-500 font-sans text-sm">Continuar estudando</h4>
                                            <span className="font-bold text-[#6735BC] text-xs cursor-pointer hover:underline">Ver todos →</span>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {/* Card 1 */}
                                            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                                <div className="mb-3">
                                                    <span className="px-3 py-1 bg-purple-100 text-[#6735BC] rounded-full text-xs font-bold">programming</span>
                                                </div>
                                                <h5 className="font-bold font-display text-gray-900 text-sm mb-1">React Hook Form + Zod</h5>
                                                <p className="text-xs text-gray-400 font-sans mb-4 leading-relaxed">Validação de formulários com TypeScript.</p>
                                                
                                                <div className="w-full bg-purple-50 rounded-full h-1.5 mb-3">
                                                    <div className="bg-[#6735BC] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Em andamento
                                                </div>
                                            </div>

                                            {/* Card 2 */}
                                            <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                                <div className="mb-3">
                                                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">computing</span>
                                                </div>
                                                <h5 className="font-bold font-display text-gray-900 text-sm mb-1">Cache API Service Workers</h5>
                                                <p className="text-xs text-gray-400 font-sans mb-4 leading-relaxed">Estratégias offline-first com SW.</p>
                                                
                                                <div className="w-full bg-green-50 rounded-full h-1.5 mb-3">
                                                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Em andamento
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/30">
                                        <h4 className="font-bold text-gray-500 font-sans text-sm mb-4">Cards por categoria</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm font-bold font-sans">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 rounded-full bg-[#6735BC]"></div> programming
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