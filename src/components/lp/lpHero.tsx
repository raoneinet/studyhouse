import { AlertCircle, CheckCircle, Clock, Grid, Layers, Sparkles, Star } from "lucide-react"

export const LpHero = () => {
    return (
        <>
            <section className="overflow-hidden bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50">
                <div className="inset-0 opacity-60"></div>
                <div className="mx-auto px-6 py-24 md:py-32 container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-semibold text-purple-700">Nova forma de estudar</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Organize seus estudos com{' '}
                                <span className="text-purple-600">cards inteligentes</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Estudaki é a plataforma definitiva para organizar, acompanhar e otimizar sua jornada de aprendizado através de um sistema visual e intuitivo de cards.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30">
                                    Começar Gratuitamente
                                </button>
                            </div>
                        </div>

                        {/* Mini Dashboard Preview */}
                        <div className="relative">
                            <div className="bg-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-6">
                                {/* Header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h3>
                                    <p className="text-sm text-gray-600">Bem-vindo de volta | Aqui está um resumo dos seus estudos</p>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-gray-600">Total de Cards</span>
                                            <Grid className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">9</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-gray-600">Em Andamento</span>
                                            <Clock className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">4</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-gray-600">Urgente</span>
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-red-600">2</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-gray-600">Concluído</span>
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div className="text-2xl font-bold text-green-600">2</div>
                                    </div>
                                </div>

                                {/* Continue Studying Section */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            Continuar estudando
                                        </h4>
                                        <span className="text-xs text-blue-600 cursor-pointer">Ver Todos →</span>
                                    </div>
                                    <div className="grid grid-rows-2 lg:grid-cols-2 gap-3">
                                        {[
                                            { title: 'React Hook Form with Zod', category: 'programming', priority: 'high', status: 'progress' },
                                            { title: 'Cache', category: 'computing', priority: 'medium', status: 'progress' }
                                        ].map((card, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                                                <div className="flex items-start justify-between mb-2">
                                                    <span className={`text-xs px-2 py-1 rounded ${card.category === 'programming' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {card.category}
                                                    </span>
                                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                </div>
                                                <h5 className="font-semibold text-sm text-gray-900 mb-2">{card.title}</h5>
                                                <div className="flex flex-col lg:flex-row justify-start items-end gap-2">
                                                    <span className={`text-xs px-2 py-0.5 rounded ${card.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                                                        {card.priority}
                                                    </span>
                                                    <span className="text-xs text-blue-600 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        Em andamento
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-gray-600" />
                                        Cards por categoria
                                    </h4>
                                    <div className="space-y-2">
                                        {[
                                            { name: 'programming', count: 5, color: 'blue' },
                                            { name: 'computing', count: 3, color: 'purple' },
                                            { name: 'other', count: 1, color: 'gray' }
                                        ].map((cat, i) => (
                                            <div key={i} className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full bg-${cat.color}-500`}></div>
                                                    <span className="text-gray-700">{cat.name}</span>
                                                </div>
                                                <span className="font-semibold text-gray-900">{cat.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}