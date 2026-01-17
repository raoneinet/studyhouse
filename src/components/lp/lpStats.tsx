export const LpStats = () => {
    return (
        <>
            <section className="py-20 px-6 bg-linear-to-br from-purple-600 via-purple-700 to-indigo-700 text-white">
                <div className="container mx-auto">
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
        </>
    )
}