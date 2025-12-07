import { Logobrand } from "@/components/header/logobrand"

export const Header = () => {
    return (
        <header className="py-5 px-5 bg-neutral-300">
            <div className="container mx-auto">
                <Logobrand 
                    title="📚 Studyhouse"
                    subtitle="Organize seus estudos de forma fácil"
                />
            </div>
        </header>
    )
}