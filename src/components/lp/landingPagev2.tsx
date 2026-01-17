import React, { useState } from 'react';
import { Star, CheckCircle, Clock, AlertCircle, Grid, Sparkles, BarChart3, Layers, Filter, Archive, Calendar } from 'lucide-react';

export default function EstudakiLanding() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
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
                  <p className="text-sm text-gray-600">Bem-vindo de volta Raone | Aqui está um resumo dos seus estudos</p>
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
                  <div className="grid grid-cols-2 gap-3">
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
                        <div className="flex items-center gap-2">
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

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

      {/* Recursos */}
      <section id="recursos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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

      {/* Stats */}
      <section className="py-20 px-6 bg-linear-to-br from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12K+', label: 'Cards Criados' },
              { value: '3.2K+', label: 'Usuários Ativos' },
              { value: '65K+', label: 'Estudos Concluídos' },
              { value: '98%', label: 'Satisfação' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comece a organizar seus estudos hoje
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Junte-se a milhares de estudantes que já transformaram sua forma de estudar
          </p>
          <button className="px-10 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30">
            Criar Conta Gratuita
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Sem compromisso • Comece em menos de 2 minutos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ES</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Estudaki</span>
              </div>
              <p className="text-gray-600 text-sm">
                Organize seus estudos de forma inteligente
              </p>
            </div>
            {[
              { title: 'Produto', links: ['Recursos', 'Preços', 'Demo'] },
              { title: 'Empresa', links: ['Sobre', 'Blog', 'Contato'] },
              { title: 'Legal', links: ['Privacidade', 'Termos', 'Cookies'] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-gray-900 mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            © 2026 Estudaki. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}