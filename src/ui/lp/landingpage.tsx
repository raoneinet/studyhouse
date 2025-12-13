import React, { useState } from 'react';
import { BookOpen, Star, Zap, Target, TrendingUp, Check, Menu, X, ArrowRight, Sparkles, Clock, Tag } from 'lucide-react';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Organize seus Estudos",
      description: "Crie cards personalizados com títulos, descrições, links e categorias para cada assunto"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Sistema de Tags",
      description: "Organize e encontre seus materiais facilmente com tags personalizadas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Acompanhe o Progresso",
      description: "Visualize seu avanço em cada assunto com barras de progresso intuitivas"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Marque Favoritos",
      description: "Destaque os conteúdos mais importantes para revisão rápida"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Acesso Rápido",
      description: "Busca inteligente e filtros avançados para encontrar o que precisa"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Estatísticas",
      description: "Acompanhe suas métricas de estudo e evolução ao longo do tempo"
    }
  ];

  const benefits = [
    "Organize todos os seus materiais em um só lugar",
    "Aumente sua produtividade nos estudos",
    "Nunca mais perca links importantes",
    "Visualize seu progresso de forma clara",
    "Acesse de qualquer dispositivo"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Organize seus estudos de forma inteligente
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Seus estudos,
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> organizados</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              A plataforma completa para organizar materiais, acompanhar progresso e potencializar seus resultados nos estudos
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image/Card Preview */}
            <div className="mt-16 relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Programação</span>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">React Hooks</h3>
                    <p className="text-sm text-slate-600 mb-4">Guia completo sobre hooks...</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Hoje
                      </span>
                      <span>3 links</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-linear-to-r from-blue-500 to-purple-600"></div>
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Matemática</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Cálculo II</h3>
                    <p className="text-sm text-slate-600 mb-4">Integrais e aplicações...</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        2 dias
                      </span>
                      <span>5 links</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-linear-to-r from-green-500 to-blue-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Tudo que você precisa para estudar melhor
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ferramentas poderosas para organizar, acompanhar e otimizar sua jornada de aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Por que escolher o StudyHub?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Uma solução completa que transforma a maneira como você organiza e gerencia seus estudos
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium">Cards Criados</span>
                    <span className="text-2xl font-bold text-blue-600">247</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <span className="font-medium">Horas de Estudo</span>
                    <span className="text-2xl font-bold text-purple-600">156h</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="font-medium">Progresso Médio</span>
                    <span className="text-2xl font-bold text-green-600">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar seus estudos?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Junte-se a milhares de estudantes que já organizam seus materiais com o StudyHub
          </p>
          
          <button className="group px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
            Começar Agora - É Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-blue-100 mt-6 text-sm">
            Não precisa cartão de crédito • Comece em menos de 1 minuto
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-400">
        <div className="mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">StudyHub</span>
              </div>
              <p className="text-sm">
                Organize seus estudos de forma inteligente e eficiente.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Atualizações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Tutoriais</a></li>
                <li><a href="#" className="hover:text-white transition">Suporte</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>© 2024 StudyHub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;