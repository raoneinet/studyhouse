export const LpStats = () => {
    return (
        <>
            <section className="py-16 px-6 bg-[#6735BC] text-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/20">
                        {[
                            { value: '12K+', label: 'Cards criados' },
                            { value: '3.4K+', label: 'Usuários ativos' },
                            { value: '65K+', label: 'Revisões feitas' },
                            { value: '98%', label: 'Satisfação' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-black font-display mb-1">{stat.value}</div>
                                <div className="text-purple-200 font-sans text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}