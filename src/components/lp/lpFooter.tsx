import { Logobrand } from "../header/logobrand"

export const LpFooter = () => {
    return (
        <>
            <footer className="border-t border-gray-800 py-12 px-6 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-white font-bold font-display text-2xl flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-[#6735BC] rounded-2xl flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                Estudaki
                            </div>
                            <p className="text-gray-400 font-sans mt-2 text-sm max-w-xs">
                                Organize seus estudos de forma inteligente e pare de perder tempo com o que não importa.
                            </p>
                        </div>
                        {[
                            { title: 'Produto', links: ['Funcionalidades', 'Preços', 'Cases'] },
                            { title: 'Empresa', links: ['Sobre', 'Blog', 'Contato'] },
                            { title: 'Legal', links: ['Privacidade', 'Termos'] }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="font-bold font-display text-white mb-4">{col.title}</h4>
                                <ul className="space-y-2">
                                    {col.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-gray-400 font-sans hover:text-[#6735BC] transition-colors text-sm">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
                        <div>© {new Date().getFullYear()} Estudaki. Todos os direitos reservados.</div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Feito com ❤️ para estudantes</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}