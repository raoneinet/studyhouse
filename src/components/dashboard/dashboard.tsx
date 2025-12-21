"use client"
import React, { useState } from 'react';
import { BookOpen, Home, Plus, Search, Grid, List, Filter, Tag, ExternalLink, Clock, Star, Circle, CircleDot, CheckCircle2, AlertCircle, X, Edit2, Trash2, Calendar, TrendingUp, Award, Target, Flame, Brain } from 'lucide-react';

const StudyAppLayout = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [view, setView] = useState('cards');
  const [selectedCard, setSelectedCard] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', color: 'bg-gray-500' },
    { id: 'math', name: 'Matemática', color: 'bg-blue-500' },
    { id: 'prog', name: 'Programação', color: 'bg-green-500' },
    { id: 'lang', name: 'Idiomas', color: 'bg-purple-500' },
    { id: 'science', name: 'Ciências', color: 'bg-yellow-500' },
  ];

  const statusOptions = [
    { 
      id: 'not-started', 
      label: 'Não Iniciado', 
      icon: Circle, 
      color: 'text-gray-400',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-700'
    },
    { 
      id: 'in-progress', 
      label: 'Em Andamento', 
      icon: CircleDot, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    { 
      id: 'completed', 
      label: 'Concluído', 
      icon: CheckCircle2, 
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    },
  ];

  const priorityOptions = [
    { 
      id: 'low', 
      label: 'Baixa',
      color: 'text-slate-500',
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-300'
    },
    { 
      id: 'medium', 
      label: 'Média',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300'
    },
    { 
      id: 'high', 
      label: 'Alta',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300'
    },
  ];

  const studyCards = [
    {
      id: 1,
      title: 'React Hooks Avançados',
      description: 'Estudo aprofundado sobre useEffect, useMemo e useCallback para otimização de performance em aplicações React modernas.',
      category: 'prog',
      tags: ['React', 'JavaScript', 'Frontend'],
      links: [
        { id: 1, title: 'Documentação Oficial React', url: 'https://react.dev/reference/react' },
        { id: 2, title: 'useEffect Complete Guide', url: 'https://overreacted.io/a-complete-guide-to-useeffect/' }
      ],
      createdAt: '15/12/2024',
      lastStudied: '2 dias atrás',
      status: 'in-progress',
      priority: 'high',
      starred: true,
      notes: 'Focar especialmente em useCallback e useMemo. Revisar exemplos práticos de otimização.'
    },
    {
      id: 2,
      title: 'Cálculo Diferencial',
      description: 'Derivadas, limites e aplicações práticas em física e engenharia.',
      category: 'math',
      tags: ['Cálculo', 'Derivadas', 'Matemática'],
      links: [
        { id: 1, title: 'Khan Academy - Cálculo', url: 'https://khanacademy.org/calculus' },
        { id: 2, title: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/calculus' },
        { id: 3, title: 'Lista de Exercícios', url: 'https://example.com/exercises' },
        { id: 4, title: 'Vídeo Aulas', url: 'https://youtube.com/playlist' }
      ],
      createdAt: '10/12/2024',
      lastStudied: '5 dias atrás',
      status: 'not-started',
      priority: 'medium',
      starred: false,
      notes: 'Começar pelos conceitos básicos de limites antes de partir para derivadas.'
    },
    {
      id: 3,
      title: 'Inglês - Phrasal Verbs',
      description: 'Lista completa de phrasal verbs comuns utilizados no dia a dia e em contextos formais.',
      category: 'lang',
      tags: ['Inglês', 'Vocabulário', 'Grammar'],
      links: [
        { id: 1, title: 'Anki Deck - Phrasal Verbs', url: 'https://ankiweb.net/phrasal-verbs' }
      ],
      createdAt: '19/12/2024',
      lastStudied: 'Hoje',
      status: 'completed',
      priority: 'low',
      starred: true,
      notes: 'Revisar semanalmente para não esquecer. Praticar em conversação.'
    },
    {
      id: 4,
      title: 'Física Quântica',
      description: 'Princípios fundamentais da mecânica quântica e suas aplicações modernas na tecnologia.',
      category: 'science',
      tags: ['Física', 'Quântica', 'Ciência'],
      links: [
        { id: 1, title: 'Quantum Computing Basics', url: 'https://quantum.com/basics' },
        { id: 2, title: 'Feynman Lectures', url: 'https://feynmanlectures.com' },
        { id: 3, title: 'PBS Space Time', url: 'https://youtube.com/pbsspacetime' },
        { id: 4, title: 'Quantum Mechanics PDF', url: 'https://example.com/qm.pdf' },
        { id: 5, title: 'MIT 8.04', url: 'https://ocw.mit.edu/8-04' },
        { id: 6, title: 'Practice Problems', url: 'https://example.com/problems' }
      ],
      createdAt: '08/12/2024',
      lastStudied: '1 semana atrás',
      status: 'in-progress',
      priority: 'high',
      starred: false,
      notes: 'Material complexo. Fazer resumos após cada tópico. Resolver exercícios práticos.'
    },
  ];

  const recentActivity = [
    { id: 1, card: 'Inglês - Phrasal Verbs', action: 'Concluído', time: 'Hoje', color: 'text-green-600' },
    { id: 2, card: 'React Hooks Avançados', action: 'Estudou', time: '2 dias atrás', color: 'text-blue-600' },
    { id: 3, card: 'Cálculo Diferencial', action: 'Adicionou link', time: '5 dias atrás', color: 'text-purple-600' },
    { id: 4, card: 'Física Quântica', action: 'Criado', time: '1 semana atrás', color: 'text-slate-600' },
  ];

  const studyStreak = 7;
  const totalStudyTime = 24;

  const getStatusInfo = (statusId) => {
    return statusOptions.find(s => s.id === statusId);
  };

  const getPriorityInfo = (priorityId) => {
    return priorityOptions.find(p => p.id === priorityId);
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(c => c.id === categoryId);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseDetail = () => {
    setSelectedCard(null);
  };

  const totalCards = studyCards.length;
  const inProgressCards = studyCards.filter(c => c.status === 'in-progress').length;
  const completedCards = studyCards.filter(c => c.status === 'completed').length;
  const highPriorityCards = studyCards.filter(c => c.priority === 'high').length;

  const cardsByCategory = categories.slice(1).map(cat => ({
    ...cat,
    count: studyCards.filter(c => c.category === cat.id).length
  }));

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <main className={`ml-64 p-8 transition-all ${selectedCard ? 'mr-96' : ''}`}>
        {currentPage === 'dashboard' && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h2>
              <p className="text-slate-600">Bem-vindo de volta! Aqui está um resumo dos seus estudos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Total de Cards</p>
                    <p className="text-2xl font-bold text-slate-800">{totalCards}</p>
                  </div>
                  <Grid className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Em Andamento</p>
                    <p className="text-2xl font-bold text-blue-600">{inProgressCards}</p>
                  </div>
                  <CircleDot className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Prioridade Alta</p>
                    <p className="text-2xl font-bold text-red-600">{highPriorityCards}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Concluídos</p>
                    <p className="text-2xl font-bold text-green-600">{completedCards}</p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-orange-100 text-sm mb-1">Sequência de Estudos</p>
                    <p className="text-4xl font-bold">{studyStreak} dias</p>
                  </div>
                  <Flame className="w-16 h-16 text-orange-200" />
                </div>
                <p className="text-orange-100 text-sm">Continue assim! Você está no caminho certo 🔥</p>
              </div>

              <div className="bg-linear-to-br from-blue-500 to-purple-500 rounded-xl shadow-sm p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Tempo de Estudo (Este Mês)</p>
                    <p className="text-4xl font-bold">{totalStudyTime}h</p>
                  </div>
                  <Brain className="w-16 h-16 text-blue-200" />
                </div>
                <p className="text-blue-100 text-sm">+15% comparado ao mês passado 📈</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Cards por Categoria
                </h3>
                <div className="space-y-3">
                  {cardsByCategory.map(cat => (
                    <div key={cat.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                        <span className="text-slate-700 font-medium">{cat.name}</span>
                      </div>
                      <span className="text-slate-600 font-bold">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Atividade Recente
                </h3>
                <div className="space-y-3">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="flex items-start justify-between py-2 border-b border-slate-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-slate-800">{activity.card}</p>
                        <p className={`text-xs ${activity.color}`}>{activity.action}</p>
                      </div>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Cards em Destaque
                </h3>
                <button 
                  onClick={() => setCurrentPage('cards')}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver todos →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {studyCards.slice(0, 3).map(card => {
                  const category = getCategoryInfo(card.category);
                  const statusInfo = getStatusInfo(card.status);
                  const priorityInfo = getPriorityInfo(card.priority);
                  const StatusIcon = statusInfo.icon;
                  
                  return (
                    <div 
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      className={`border-2 ${priorityInfo.borderColor} rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-1">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${category.color} bg-opacity-10`}>
                            <span className={`${category.color.replace('bg-', 'text-')}`}>{category.name}</span>
                          </div>
                        </div>
                        {card.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-1 text-sm">{card.title}</h4>
                      <p className="text-xs text-slate-600 mb-3 line-clamp-2">{card.description}</p>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`px-2 py-1 rounded text-xs font-semibold ${priorityInfo.bgColor} ${priorityInfo.color} flex items-center gap-1`}>
                          <AlertCircle className="w-3 h-3" />
                          {priorityInfo.label}
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 px-2 py-1 ${statusInfo.bgColor} rounded`}>
                        <StatusIcon className={`w-3 h-3 ${statusInfo.color}`} />
                        <span className={`text-xs font-medium ${statusInfo.textColor}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-slate-600 mb-3">Ações Rápidas</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setCurrentPage('cards')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Grid className="w-4 h-4" />
                    <span className="text-sm font-medium">Ver Todos os Cards</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium">Criar Novo Card</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'cards' && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Meus Cards</h2>
              <p className="text-slate-600">Organize e gerencie todos os seus materiais de estudo</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por título, descrição ou tags..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <Filter className="w-4 h-4" />
                    Filtros
                  </button>
                  
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setView('cards')}
                      className={`p-2 ${view === 'cards' ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setView('list')}
                      className={`p-2 border-l border-slate-200 ${view === 'list' ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyCards.map(card => {
                const category = getCategoryInfo(card.category);
                const statusInfo = getStatusInfo(card.status);
                const priorityInfo = getPriorityInfo(card.priority);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <div 
                    key={card.id} 
                    onClick={() => handleCardClick(card)}
                    className={`bg-white rounded-xl shadow-sm border-2 ${priorityInfo.borderColor} p-6 hover:shadow-md transition-shadow cursor-pointer group ${selectedCard?.id === card.id ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${category.color} bg-opacity-10`}>
                          <span className={`${category.color.replace('bg-', 'text-')}`}>{category.name}</span>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-semibold ${priorityInfo.bgColor} ${priorityInfo.color} flex items-center gap-1`}>
                          <AlertCircle className="w-3 h-3" />
                          {priorityInfo.label}
                        </div>
                      </div>
                      {card.starred && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{card.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          <span>{card.links.length} links</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{card.lastStudied}</span>
                        </div>
                      </div>

                      <div className={`flex items-center gap-2 px-3 py-2 ${statusInfo.bgColor} rounded-lg`}>
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`text-sm font-medium ${statusInfo.textColor}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </main>

      {selectedCard && (
        <aside className="fixed right-0 top-0 h-full w-96 bg-white border-l border-slate-200 shadow-2xl overflow-y-auto z-40">
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Detalhes do Card</h2>
            <button 
              onClick={handleCloseDetail}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-800 leading-tight pr-4">
                  {selectedCard.title}
                </h3>
                {selectedCard.starred && <Star className="w-6 h-6 text-yellow-500 fill-yellow-500 shrink-0" />}
              </div>
              
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                  <Edit2 className="w-4 h-4" />
                  Editar
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm">
                  <Trash2 className="w-4 h-4" />
                  Excluir
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-600">Categoria:</span>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryInfo(selectedCard.category).color} bg-opacity-10`}>
                  <span className={`${getCategoryInfo(selectedCard.category).color.replace('bg-', 'text-')}`}>
                    {getCategoryInfo(selectedCard.category).name}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-600">Status:</span>
                <div className={`flex items-center gap-2 px-3 py-1 ${getStatusInfo(selectedCard.status).bgColor} rounded-lg`}>
                  {React.createElement(getStatusInfo(selectedCard.status).icon, {
                    className: `w-4 h-4 ${getStatusInfo(selectedCard.status).color}`
                  })}
                  <span className={`text-sm font-medium ${getStatusInfo(selectedCard.status).textColor}`}>
                    {getStatusInfo(selectedCard.status).label}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-600">Prioridade:</span>
                <div className={`flex items-center gap-1 px-3 py-1 ${getPriorityInfo(selectedCard.priority).bgColor} rounded-lg`}>
                  <AlertCircle className={`w-4 h-4 ${getPriorityInfo(selectedCard.priority).color}`} />
                  <span className={`text-sm font-medium ${getPriorityInfo(selectedCard.priority).color}`}>
                    {getPriorityInfo(selectedCard.priority).label}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">Criado em:</span>
                <span>{selectedCard.createdAt}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Último estudo:</span>
                <span>{selectedCard.lastStudied}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-600 mb-2">Descrição</h4>
              <p className="text-slate-700 leading-relaxed">{selectedCard.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-600 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCard.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-600 mb-3">
                Links de Estudo ({selectedCard.links.length})
              </h4>
              <div className="space-y-2">
                {selectedCard.links.map(link => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                    <span className="text-sm text-slate-700 group-hover:text-blue-600 truncate">
                      {link.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {selectedCard.notes && (
              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Anotações</h4>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedCard.notes}</p>
                </div>
              </div>
            )}
          </div>
        </aside>
      )}

      {selectedCard && (
        <div 
          onClick={handleCloseDetail}
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
        ></div>
      )}
    </div>
  );
};

export default StudyAppLayout;