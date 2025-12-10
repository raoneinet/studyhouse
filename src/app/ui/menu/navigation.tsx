import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Navigation = () => {

    const links = [
        { href: "/", label: "Home" },
        { href: "/createNewItem", label: "Novo Item" },
        { href: "/allItems", label: "Todos os Itens" },
    ]
    return (
        <div className="bg-white min-w-50 my-5 rounded-lg p-3">
            <nav>
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                    >
                        <Button variant="ghost" className="w-full">{link.label}</Button>
                    </Link>
                ))}
            </nav>
        </div>
    )
}