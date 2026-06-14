"use client"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const SearchBar = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="relative flex items-center group">
                <Search className="absolute left-3 w-5 h-5 text-slate-400 z-10 pointer-events-none" />
                <Input
                    type="text"
                    placeholder="buscar..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-white w-10 md:w-64 pl-10 py-2 border border-slate-200 rounded-full md:rounded-2xl cursor-pointer md:cursor-text focus:cursor-text focus:w-48 md:focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:opacity-0 focus:placeholder:opacity-100 md:placeholder:opacity-100" 
                />
            </div>
        </form>
    )
}