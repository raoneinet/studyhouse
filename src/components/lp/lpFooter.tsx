export const LpFooter = () => {
    return (
        <>
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
                            { title: 'Produto', links: ['Recursos', 'Preços'] },
                            { title: 'Empresa', links: ['Sobre', 'Contato'] },
                            { title: 'Legal', links: ['Privacidade', 'Termos'] }
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
        </>
    )
}