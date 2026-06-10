import { AlertCircle, CheckCircle, Clock, Grid, Layers, Sparkles, Star } from "lucide-react"

export const LpHero = () => {
    return (
        <>
            <section className="overflow-hidden bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50">
                <div className="inset-0 opacity-60"></div>
                <div className="mx-auto px-6 py-24 md:py-32 container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6735BC]/10 rounded-full mb-6 border border-[#6735BC]/20">
                                <Sparkles className="w-4 h-4 text-[#6735BC]" />
                                <span className="text-sm font-bold text-[#6735BC]">A Nova forma de estudar</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black font-display text-gray-900 mb-6 leading-tight tracking-tight">
                                Seus estudos,<br/> <span className="text-[#6735BC]">organizados<br/> de verdade.</span>
                            </h1>
                            <p className="text-xl font-sans text-gray-600 mb-8 leading-relaxed max-w-md">
                                Crie cards de estudo, defina prioridades e acompanhe seu progresso. Pare de perder o fio do que está aprendendo.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <button className="px-8 py-3.5 w-full sm:w-auto bg-[#6735BC] text-white rounded-lg font-bold font-sans hover:bg-[#522996] transition-all shadow-lg shadow-[#6735BC]/30">
                                    Começar gratuitamente →
                                </button>
                                <button className="px-8 py-3.5 w-full sm:w-auto bg-white text-gray-700 border border-gray-200 rounded-lg font-bold font-sans hover:bg-gray-50 transition-all">
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

                        {/* Screenshot 3D Preview */}
                        <div className="relative z-10 hidden md:block">
                            <div className="relative w-[110%] -right-[10%]">
                                <img 
                                    src="/placeholder-dashboard.png" 
                                    alt="Dashboard do Estudaki" 
                                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(103,53,188,0.15)]"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop";
                                    }}
                                />
                                {/* Floating Card UI Mock */}
                                <div className="absolute top-[20%] -left-[10%] bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-[pulse_4s_ease-in-out_infinite]">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600 font-bold text-xs">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-sans">Meta batida</p>
                                        <p className="font-bold text-gray-900 font-display text-sm">Cards Revisados</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-[10%] -left-[5%] bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                        <span className="text-red-600 font-bold text-xs">!</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-sans">Atenção</p>
                                        <p className="font-bold text-gray-900 font-display text-sm">Card Atrasado</p>
                                    </div>
                                </div>
                            </div>
                            {/* Glow effects */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6735BC] rounded-full blur-[120px] opacity-15"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}