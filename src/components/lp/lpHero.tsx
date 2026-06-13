import { AlertCircle, CheckCircle, Clock, Grid, Layers, Sparkles, Star } from "lucide-react"

export const LpHero = () => {
    return (
        <>
            <section className="overflow-hidden bg-linear-to-br from-purple-50 via-orange-50 to-indigo-50">
                <div className="inset-0 opacity-60"></div>
                <div className="mx-auto px-6 py-24 md:py-32 container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 rounded-full mb-6 border border-[#f97316]/20">
                                <Sparkles className="w-4 h-4 text-[#f97316]" />
                                <span className="text-sm font-bold text-[#f97316]">A Nova forma de estudar</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black font-display text-gray-900 mb-6 leading-tight tracking-tight">
                                Seus estudos,<br/> <span className="text-[#f97316]">organizados<br/> de verdade.</span>
                            </h1>
                            <p className="text-xl font-sans text-gray-600 mb-8 leading-relaxed max-w-md">
                                Crie cards de estudo, defina prioridades e acompanhe seu progresso. Pare de perder o fio do que está aprendendo.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <button className="px-8 py-3.5 w-full sm:w-auto bg-[#f97316] text-white rounded-2xl font-bold font-sans hover:bg-[#ea580c] transition-all shadow-lg shadow-[#f97316]/30">
                                    Começar gratuitamente →
                                </button>
                                <button className="px-8 py-3.5 w-full sm:w-auto bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold font-sans hover:bg-gray-50 transition-all">
                                    Ver como funciona
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                                <p className="text-sm font-sans text-gray-500">
                                    <span className="font-bold text-gray-700">+12K</span> de estudantes já organizam com o Estudaki
                                </p>
                            </div>
                        </div>

                        {/* Illustration Preview */}
                        <div className="relative z-10 hidden md:flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                {/* Main Card Container */}
                                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(103,53,188,0.15)] border border-gray-100 p-6 relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold font-display text-gray-900">Meus Cards</h3>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                    </div>

                                    {/* Study Card 1 */}
                                    <div className="bg-white border border-gray-100 rounded-xl p-4 mb-4 shadow-sm">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex gap-2">
                                                <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-600 rounded-xl">programming</span>
                                                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-600 rounded-xl">Média</span>
                                            </div>
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 font-display mb-1">Debounce & Throttle</h4>
                                        <p className="text-sm text-gray-500 font-sans mb-4 leading-snug">Performance em apps web com eventos frequentes.</p>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
                                            <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                                            <div className="w-2 h-2 rounded-full bg-orange-600"></div> Em andamento
                                        </div>
                                    </div>

                                    {/* Study Card 2 */}
                                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm relative">
                                        {/* Bottom Left Floating Badge overlapping card 2 */}
                                        <div className="absolute -left-16 -bottom-4 bg-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 z-20 animate-[pulse_5s_ease-in-out_infinite]">
                                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                                📌
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 font-display text-sm">4 anotações</p>
                                                <p className="text-xs text-gray-500 font-sans">Cache Teste</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex gap-2">
                                                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-600 rounded-xl">engineering</span>
                                                <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-600 rounded-xl">Média</span>
                                            </div>
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 font-display mb-1">Cache API & Service Workers</h4>
                                        <p className="text-sm text-gray-500 font-sans mb-4 leading-snug">Estratégias offline-first com SW e cache.</p>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
                                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-500">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Em pausa
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge Top Right */}
                                <div className="absolute -top-6 -right-12 bg-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 z-20 animate-[pulse_4s_ease-in-out_infinite]">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600 font-bold text-xs">✓</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 font-display text-sm">Card concluído!</p>
                                        <p className="text-xs text-gray-500 font-sans">React Hooks</p>
                                    </div>
                                </div>

                            </div>
                            {/* Glow effects */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[100px] opacity-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}